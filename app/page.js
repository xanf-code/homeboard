import Greet from "@/components/Greet";
import MainHinata from "@/components/MainHinata";
import MainKavach from "@/components/MainKavach";
import WeatherTime from "@/components/WeatherTime";

export default function Home() {
  return (
    <div className="p-24">
      <div className="flex justify-between p-4">
        <Greet />
        <WeatherTime />
      </div>
      <div className="flex space-x-2 mt-24">
        <MainKavach />
        <MainHinata />
      </div>
    </div>
  );
}
