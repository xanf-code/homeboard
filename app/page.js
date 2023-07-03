"use client";
import Carousel from "@/components/Carousel";
import Greet from "@/components/Greet";
import WeatherTime from "@/components/WeatherTime";

export default function Home() {
  return (
    <div className="p-[5.5rem] pb-0 pt-[3rem]">
      <div className="flex justify-between p-4 pt-0">
        <Greet />
        <WeatherTime />
      </div>
      <Carousel />
    </div>
  );
}
