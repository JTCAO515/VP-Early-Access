"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MAP_CITIES, type Lang } from "@/lib/copy";
import { CHINA_OUTLINE_PATHS, MAP_VIEWBOX } from "@/lib/map-geometry";
import { type CityWeather, weatherLabel } from "@/lib/weather";

const CYCLE_MS = 4000;

type Props = { lang: Lang; weather: CityWeather[] };

function project(lat: number, lon: number) {
  const { bounds, width, height, padding } = MAP_VIEWBOX;
  return {
    x: padding + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * (width - padding * 2),
    y: padding + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * (height - padding * 2),
  };
}

export default function ChinaMap({ lang, weather }: Props) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const city = MAP_CITIES[active];
  const point = project(city.lat, city.lon);
  const transform = `translate(${500 - point.x * 1.35} ${360 - point.y * 1.35}) scale(1.35)`;
  const roll = ((active % 12) - 5.5) * -7;
  const focus = (index: number) => { setActive(index); setPlaying(false); };

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting && !reduced), { threshold: .35 });
    if (ref.current) observer.observe(ref.current); return () => observer.disconnect();
  }, [reduced]);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % MAP_CITIES.length), CYCLE_MS);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  const activeWeather = weather[active];
  return <section className="china-map" ref={ref} aria-label={lang === "zh" ? "中国目的地地图" : "China destination map"}>
    <div className="china-map-canvas">
      <svg className="map-roller" style={{ transform: `perspective(1100px) rotateY(${reduced ? 0 : roll}deg)` }} viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`} role="img" aria-label={lang === "zh" ? "包含香港、澳门和台湾的中国轮廓与目的地点位" : "China outline with Hong Kong, Macao and Taiwan destination markers"}>
        <g className={reduced ? "map-stage reduced" : "map-stage"} style={{ transform }}>
          {Object.values(CHINA_OUTLINE_PATHS).map((path, index) => <path key={index} d={path} className="china-outline" />)}
          {MAP_CITIES.map((item, index) => { const marker = project(item.lat, item.lon); return <circle key={item.id} className={index === active ? "city-marker active" : "city-marker"} cx={marker.x} cy={marker.y} r="5" onClick={() => focus(index)} />; })}
        </g>
      </svg>
      <aside className="map-callout" style={{ left: `${Math.min(72, Math.max(14, point.x / 10 + 8))}%`, top: `${Math.min(72, Math.max(15, point.y / 7 + 3))}%` }}>
        <strong>{city.name[lang]}</strong><span>{city.place[lang]}</span>
        {activeWeather ? <small>{weatherLabel(activeWeather.code, lang)} · {Math.round(activeWeather.temperature)}°C</small> : null}
      </aside>
    </div>
  </section>;
}
