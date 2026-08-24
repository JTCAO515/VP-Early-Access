import type { Lang } from "./copy";

export type CityWeather = { temperature: number; code: number } | null;

export function weatherLabel(code: number, lang: Lang): string {
  const labels = {
    clear: { en: "Clear", zh: "晴" }, cloudy: { en: "Cloudy", zh: "多云" }, overcast: { en: "Overcast", zh: "阴" },
    drizzle: { en: "Light rain", zh: "小雨" }, rain: { en: "Rain", zh: "雨" }, snow: { en: "Snow", zh: "雪" },
    fog: { en: "Fog", zh: "雾" }, storm: { en: "Thunderstorm", zh: "雷暴" },
  } as const;
  const key = code === 0 ? "clear" : code <= 2 ? "cloudy" : code === 3 ? "overcast" : code <= 57 ? "drizzle" : code <= 67 || code <= 82 ? "rain" : code <= 77 || code <= 86 ? "snow" : code <= 48 ? "fog" : "storm";
  return labels[key][lang];
}
