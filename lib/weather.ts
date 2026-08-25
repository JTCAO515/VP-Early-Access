import type { Lang } from "./copy";

export type CityWeather = { temperature: number; code: number } | null;

export function weatherLabel(code: number, lang: Lang): string {
  const labels = {
    clear: { en: "Clear", zh: "晴" }, cloudy: { en: "Cloudy", zh: "多云" }, overcast: { en: "Overcast", zh: "阴" },
    drizzle: { en: "Light rain", zh: "小雨" }, rain: { en: "Rain", zh: "雨" }, snow: { en: "Snow", zh: "雪" },
    fog: { en: "Fog", zh: "雾" }, storm: { en: "Thunderstorm", zh: "雷暴" },
  } as const;
  const key = code === 0 ? "clear"
    : code <= 2 ? "cloudy"
      : code === 3 ? "overcast"
        : code === 45 || code === 48 ? "fog"
          : code >= 51 && code <= 57 ? "drizzle"
            : (code >= 71 && code <= 77) || code === 85 || code === 86 ? "snow"
              : (code >= 61 && code <= 67) || (code >= 80 && code <= 82) ? "rain"
                : "storm";
  return labels[key][lang];
}
