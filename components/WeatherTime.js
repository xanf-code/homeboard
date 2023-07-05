"use client";

import { useQuery } from "@tanstack/react-query";
import WeatherSkeleton from "./Skeletons/WeatherSkeleton";

export default function WeatherTime() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weatherdata"],
    queryFn: async () => {
      const res = await fetch(process.env.WEATHER_URL);
      return await res.json();
    },
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) {
    return <WeatherSkeleton />;
  }

  if (error) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="text-xl space-y-3">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M212,52a32,32,0,1,0,32,32A32,32,0,0,0,212,52Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,212,92ZM160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V92a12,12,0,0,1,24,0v75.22A24,24,0,0,1,132,188Z"></path>
        </svg>
        <p className="text-3xl font-bold">{data.main.temp}°C</p>
      </div>
      <div className="flex space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>
        </svg>
        <p>{data.main.temp_max}°C</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M244,136v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,127l31.51-31.52a12,12,0,0,1,17,0L220,171V136a12,12,0,0,1,24,0Z"></path>
        </svg>
        <p>{data.main.temp_min}°C</p>
      </div>
      <div className="flex space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM194.08,160H140V144h56A68,68,0,0,1,194.08,160ZM140,120V104h47a115,115,0,0,1,5.68,16Zm19.3-58.71A197.29,197.29,0,0,1,173.68,80H140V41.46A243.5,243.5,0,0,1,159.3,61.29ZM60,144c0-33.31,20-63.37,36.7-82.71A243.5,243.5,0,0,1,116,41.46V210.92A68.1,68.1,0,0,1,60,144Zm80,66.92V184h42.94A68,68,0,0,1,140,210.92Z"></path>
        </svg>
        <p>{data.main.humidity}%</p>
        {data.rain ? (
          <>
            <svg
              className={`${
                data.rain["1h"] > 3 ? "animate-pulse" : "animate-none"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M156,12A80.22,80.22,0,0,0,82.39,60.36,56.76,56.76,0,0,0,76,60a56,56,0,0,0,0,112h29.58L86,201.34a12,12,0,1,0,20,13.32L134.42,172H156a80,80,0,0,0,0-160Zm0,136H76a32,32,0,0,1,0-64h.28c-.11,1.1-.2,2.2-.26,3.3a12,12,0,1,0,24,1.39A56.06,56.06,0,1,1,156,148Zm.65,58.66-26.67,40a12,12,0,1,1-20-13.32l26.66-40a12,12,0,1,1,20,13.32Z"></path>
            </svg>
            <p>{data.rain["1h"]}mm</p>
          </>
        ) : (
          <>
            <svg
              className={`${
                data.clouds.all > 80 ? "animate-pulse" : "animate-none"
              }`}
              style={{ animationDuration: "6s" }}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Z"></path>
            </svg>
            <p>{data.clouds.all}%</p>
          </>
        )}
      </div>
    </div>
  );
}
