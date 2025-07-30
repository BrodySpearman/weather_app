import Image from "next/image";
import AppHeader from "@/components/ui/AppHeader/appheader";
import CurrentWeather from "@/components/ui/CurrentWeather/currentweather";
import WeatherOverview from "@/components/ui/WeatherOverview/weatheroverview";

export default function Home() {
  return (
    <div className="font-inter font-thin">
      <main className="flex flex-col gap-[16px] row-start-2">
          <AppHeader />
          <CurrentWeather />
          <div className="flex flex-row grow-0">
            <WeatherOverview />
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
