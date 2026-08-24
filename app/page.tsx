import EarlyAccessPage from "@/components/EarlyAccessPage";
import { MAP_CITIES } from "@/lib/copy";
import type { CityWeather } from "@/lib/weather";

async function getWeather(): Promise<CityWeather[]> {
  const latitude = MAP_CITIES.map((city) => city.lat).join(",");
  const longitude = MAP_CITIES.map((city) => city.lon).join(",");
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`, { next: { revalidate: 1800 } });
    if (!response.ok) return MAP_CITIES.map(() => null);
    const data = await response.json() as { current?: Array<{ temperature_2m?: number; weather_code?: number }> };
    return MAP_CITIES.map((_, index) => {
      const current = data.current?.[index];
      return typeof current?.temperature_2m === "number" && typeof current.weather_code === "number" ? { temperature: current.temperature_2m, code: current.weather_code } : null;
    });
  } catch { return MAP_CITIES.map(() => null); }
}

export default async function Page() {
  return <EarlyAccessPage weather={await getWeather()} />;
}
