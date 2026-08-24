import { CITIES, CITY_LINKS, CITY_POINTS } from "@/lib/copy";

const W = 700;
const H = 460;

/**
 * A node-and-arc constellation rather than a drawn national outline.
 *
 * Publishing a map of China in the mainland requires an approved base map and a
 * review number under 《地图管理条例》, and a hand-drawn border would be both a
 * legal and an accuracy risk. The city network carries the same message without
 * asserting any boundary. Swap in an approved base map SVG behind the nodes if
 * one is ever licensed — the coordinates in CITY_POINTS stay valid.
 */

/** Labels sit left of the node where a right-hand label would collide or overflow. */
const LABEL_LEFT = new Set(["Chengdu", "Guilin", "Macao"]);

const at = (city: string) => {
  const p = CITY_POINTS[city];
  return { x: p.x * W, y: p.y * H };
};

/** Gentle arc: control point pushed perpendicular to the chord. */
function arc(from: string, to: string): string {
  const a = at(from);
  const b = at(to);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const cx = (a.x + b.x) / 2 - dy * 0.16;
  const cy = (a.y + b.y) / 2 + dx * 0.16;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

export default function Constellation() {
  return (
    <div className="constellation">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="VisePanda route network across eight cities">
        <defs>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="#8f5cf0" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#8f5cf0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {CITY_LINKS.map(([from, to]) => (
          <path
            key={`${from}-${to}`}
            d={arc(from, to)}
            fill="none"
            stroke="#b48cf5"
            strokeOpacity="0.5"
            strokeWidth="1.1"
          />
        ))}

        {CITIES.map((city) => {
          const { x, y } = at(city);
          const left = LABEL_LEFT.has(city);
          return (
            <g key={city}>
              <circle cx={x} cy={y} r="17" fill="url(#node-glow)" />
              <circle cx={x} cy={y} r="4.6" fill="#8f5cf0" />
              <circle cx={x} cy={y} r="4.6" fill="none" stroke="#fff" strokeWidth="1.4" />
              <text
                x={left ? x - 12 : x + 12}
                y={y + 4.5}
                textAnchor={left ? "end" : "start"}
                fill="#2a182e"
                fontSize="13.5"
                fontWeight="500"
              >
                {city}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
