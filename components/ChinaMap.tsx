"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { MAP_CITIES, type Lang } from "@/lib/copy";
import { LANDMARK_ART } from "@/lib/landmarks";
import { CHINA_OUTLINE_PATHS, CHINA_PROVINCE_PATHS, MAP_VIEWBOX } from "@/lib/map-geometry";
import { type CityWeather, weatherLabel } from "@/lib/weather";

const CYCLE_MS = 5200;
const LENS_RADIUS = 132;
const LENS_SCALE = 2.6;
const GRATICULE_STEP = 10;

/** Sizes authored in screen units, divided back out of the lens magnification. */
const g = (value: number) => value / LENS_SCALE;

type Props = { lang: Lang; weather: CityWeather[] };
type Point = { x: number; y: number };

function project(lat: number, lon: number): Point {
  const { bounds, width, height, padding } = MAP_VIEWBOX;
  return {
    x: padding + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * (width - padding * 2),
    y: padding + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * (height - padding * 2),
  };
}

const CITY_POINTS = MAP_CITIES.map((city) => project(city.lat, city.lon));

/** Faint 10-degree graticule, clipped to the country silhouette. */
const GRATICULE = (() => {
  const { bounds, width, height } = MAP_VIEWBOX;
  const lines: string[] = [];
  for (let lon = Math.ceil(bounds.minLon / GRATICULE_STEP) * GRATICULE_STEP; lon < bounds.maxLon; lon += GRATICULE_STEP) {
    const { x } = project(bounds.minLat, lon);
    lines.push(`M${x.toFixed(1)} 0 L${x.toFixed(1)} ${height}`);
  }
  for (let lat = Math.ceil(bounds.minLat / GRATICULE_STEP) * GRATICULE_STEP; lat < bounds.maxLat; lat += GRATICULE_STEP) {
    const { y } = project(lat, bounds.minLon);
    lines.push(`M0 ${y.toFixed(1)} L${width} ${y.toFixed(1)}`);
  }
  return lines.join(" ");
})();

export default function ChinaMap({ lang, weather }: Props) {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [lens, setLens] = useState<Point | null>(null);
  const [callout, setCallout] = useState<Point | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const city = MAP_CITIES[active];
  const activeWeather = weather[active];

  /** Map viewBox units to pixels inside the canvas, clamped so the callout never leaves the frame. */
  const toCanvasPixels = useCallback((value: Point): Point | null => {
    const svg = svgRef.current;
    const matrix = svg?.getScreenCTM();
    if (!svg || !matrix) return null;
    const box = svg.getBoundingClientRect();
    const projected = new DOMPoint(value.x, value.y).matrixTransform(matrix);
    return {
      x: Math.min(Math.max(projected.x - box.left, 122), Math.max(122, box.width - 122)),
      y: Math.min(Math.max(projected.y - box.top, 128), Math.max(128, box.height - 12)),
    };
  }, []);

  const toViewBox = useCallback((clientX: number, clientY: number): Point | null => {
    const matrix = svgRef.current?.getScreenCTM();
    if (!matrix) return null;
    const projected = new DOMPoint(clientX, clientY).matrixTransform(matrix.inverse());
    return { x: projected.x, y: projected.y };
  }, []);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // The lens is a mouse affordance; touch devices keep the plain plate and the rotating highlight.
  useEffect(() => {
    const media = matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => { setFinePointer(media.matches); if (!media.matches) setLens(null); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting && !reduced), { threshold: .35 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [reduced]);

  // The map itself never pans; only the highlighted city rotates while nobody is pointing at it.
  useEffect(() => {
    if (!playing || pinned || lens) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % MAP_CITIES.length), CYCLE_MS);
    return () => window.clearTimeout(timer);
  }, [active, playing, pinned, lens]);

  // The callout hangs above the lens while magnifying, and above the marker otherwise.
  useEffect(() => {
    const anchor = lens ? { x: lens.x, y: lens.y - LENS_RADIUS } : CITY_POINTS[active];
    const update = () => setCallout(toCanvasPixels(anchor));
    update();
    const observer = new ResizeObserver(update);
    if (svgRef.current) observer.observe(svgRef.current);
    window.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", update); };
  }, [active, lens, toCanvasPixels]);

  const trackPointer = (event: PointerEvent<SVGSVGElement>) => {
    if (!finePointer || event.pointerType === "touch") return;
    const position = toViewBox(event.clientX, event.clientY);
    if (!position) return;
    setLens(position);
    if (pinned) return;
    let nearest = -1;
    let best = LENS_RADIUS;
    CITY_POINTS.forEach((marker, index) => {
      const distance = Math.hypot(marker.x - position.x, marker.y - position.y);
      if (distance < best) { best = distance; nearest = index; }
    });
    if (nearest >= 0) setActive(nearest);
  };

  const focus = (index: number) => {
    setActive(index);
    setPinned((value) => !(value && active === index));
    if (finePointer) setLens(CITY_POINTS[index]);
  };

  const magnify = lens ? `translate(${lens.x} ${lens.y}) scale(${LENS_SCALE}) translate(${-lens.x} ${-lens.y})` : undefined;
  const outlines = Object.entries(CHINA_OUTLINE_PATHS);

  const provinceShapes = useMemo(() => CHINA_PROVINCE_PATHS.map((province, index) => ({
    ...province,
    tint: index % 4,
  })), []);

  return (
    <section
      className="china-map"
      ref={sectionRef}
      aria-label={lang === "zh" ? "中国目的地地图" : "China destination map"}
    >
      <div className="china-map-canvas">
        <svg
          ref={svgRef}
          className={lens ? "map-plate lensing" : "map-plate"}
          viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
          onPointerMove={trackPointer}
          onPointerLeave={() => { setLens(null); setPinned(false); }}
          role="img"
          aria-label={lang === "zh"
            ? `中国省级界线点状地图，含香港、澳门、台湾与 ${MAP_CITIES.length} 个目的地点位`
            : `Dotted China map with province borders, Hong Kong, Macao, Taiwan and ${MAP_CITIES.length} destination markers`}
        >
          <defs>
            <pattern id="map-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.15" fill="#8b7b90" fillOpacity=".42" />
            </pattern>
            <pattern id="map-dots-lens" width="4.6" height="4.6" patternUnits="userSpaceOnUse">
              <circle cx=".8" cy=".8" r=".44" fill="#7a6a80" fillOpacity=".5" />
            </pattern>
            <clipPath id="china-clip">
              {outlines.map(([code, path]) => <path key={code} d={path} />)}
            </clipPath>
            {lens ? <clipPath id="lens-clip">
              <circle cx={lens.x} cy={lens.y} r={LENS_RADIUS} />
            </clipPath> : null}
            {MAP_CITIES.map((item) => (
              <symbol key={item.id} id={`lm-${item.id}`} viewBox="0 0 32 32" className="landmark-art">
                {(LANDMARK_ART[item.id] ?? []).map((d, index) => <path key={index} d={d} />)}
              </symbol>
            ))}
            <radialGradient id="lens-glass" cx=".35" cy=".3" r=".85">
              <stop offset="0" stopColor="#fff" stopOpacity=".34" />
              <stop offset=".55" stopColor="#fff" stopOpacity=".04" />
              <stop offset="1" stopColor="#5b3f74" stopOpacity=".12" />
            </radialGradient>
          </defs>

          <g className="map-base">
            <g clipPath="url(#china-clip)">
              <path className="map-graticule" d={GRATICULE} />
            </g>
            {provinceShapes.map((province) => (
              <path key={province.id} className={`province tint-${province.tint}`} d={province.d} />
            ))}
            {outlines.map(([code, path]) => <path key={code} className="china-outline" d={path} />)}
            {MAP_CITIES.map((item, index) => (
              <circle
                key={item.id}
                className={index === active ? "city-marker active" : "city-marker"}
                cx={CITY_POINTS[index].x}
                cy={CITY_POINTS[index].y}
                r="5"
              />
            ))}
          </g>

          {lens ? (
            <g className="map-lens">
              <g clipPath="url(#lens-clip)">
                <rect x="0" y="0" width={MAP_VIEWBOX.width} height={MAP_VIEWBOX.height} className="lens-backdrop" />
                <g transform={magnify}>
                  {provinceShapes.map((province) => (
                    <path key={province.id} className={`province lens tint-${province.tint}`} d={province.d} />
                  ))}
                  {outlines.map(([code, path]) => <path key={code} className="china-outline lens" d={path} />)}
                  {CHINA_PROVINCE_PATHS.map((province) => (
                    <text
                      key={province.id}
                      className="province-label"
                      x={province.cx}
                      y={province.cy}
                      fontSize={11 / LENS_SCALE}
                    >
                      {lang === "zh" ? province.zh : province.en}
                    </text>
                  ))}
                  {MAP_CITIES.map((item, index) => {
                    const marker = CITY_POINTS[index];
                    return (
                      <g key={item.id} className={index === active ? "lens-city active" : "lens-city"}>
                        <rect
                          className="lens-glyph-plate"
                          x={marker.x - g(13)}
                          y={marker.y - g(35)}
                          width={g(26)}
                          height={g(26)}
                          rx={g(7)}
                        />
                        <use
                          className="lens-glyph"
                          href={`#lm-${item.id}`}
                          x={marker.x - g(10)}
                          y={marker.y - g(32)}
                          width={g(20)}
                          height={g(20)}
                          strokeWidth={2.6}
                        />
                        <circle cx={marker.x} cy={marker.y} r={g(6)} />
                        <text x={marker.x + g(9)} y={marker.y + g(4)} fontSize={g(12)}>
                          {item.name[lang]}
                        </text>
                      </g>
                    );
                  })}
                </g>
                <circle cx={lens.x} cy={lens.y} r={LENS_RADIUS} fill="url(#lens-glass)" />
              </g>
              <circle className="lens-ring" cx={lens.x} cy={lens.y} r={LENS_RADIUS} />
              <circle className="lens-ring inner" cx={lens.x} cy={lens.y} r={LENS_RADIUS - 5} />
            </g>
          ) : null}

          <g className="map-controls">
            {MAP_CITIES.map((item, index) => {
              const marker = CITY_POINTS[index];
              return (
                <g
                  key={item.id}
                  className="map-city-control"
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.name[lang]} · ${item.place[lang]}`}
                  aria-pressed={pinned && index === active}
                  onClick={(event) => { event.stopPropagation(); focus(index); }}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    focus(index);
                  }}
                >
                  <circle cx={marker.x} cy={marker.y} r="11" />
                </g>
              );
            })}
          </g>
        </svg>

        {callout ? (
          <aside
            className={`map-callout${pinned ? " pinned" : ""}${lens ? " tracking" : ""}`}
            style={{ left: `${callout.x}px`, top: `${callout.y}px` }}
          >
            <span className="callout-art" aria-hidden="true">
              <svg viewBox="0 0 32 32"><use href={`#lm-${city.id}`} strokeWidth={1.3} /></svg>
            </span>
            <strong>{city.name[lang]}</strong>
            <span>{city.place[lang]}</span>
            {activeWeather ? <small>{weatherLabel(activeWeather.code, lang)} · {Math.round(activeWeather.temperature)}°C</small> : null}
          </aside>
        ) : null}

        {finePointer ? (
          <p className="map-hint" aria-hidden="true">
            {lang === "zh" ? "移动光标即可放大所在区域" : "Move the cursor to magnify a region"}
          </p>
        ) : null}
      </div>
    </section>
  );
}
