"use client";

import { useQuery } from "@tanstack/react-query";
import HardwareCard from "./HardwareCard";
import ActivityBlinker from "./ActivityBlinker";
import { getTimeAgo } from "@/utils/timeago";
import KavHinaSkeleton from "./Skeletons/KavHinaSkeleton";
import { Ubuntu_Mono } from "next/font/google";
import React, { useState, useEffect } from "react";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

export default function MainHinata() {
  const [currentTimeAgo, setCurrentTimeAgo] = useState("");
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["hinatadata"],
    queryFn: async () => {
      const res = await fetch(process.env.HINATA_URL);
      return await res.json();
    },
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data && data.metadata && data.metadata.timestamp) {
      setCurrentTimeAgo(getTimeAgo(data.metadata.timestamp));

      const interval = setInterval(() => {
        setCurrentTimeAgo(getTimeAgo(data.metadata.timestamp));
      }, 60000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [data]);

  if (isLoading || error || isRefetchError) {
    return <KavHinaSkeleton />;
  }

  if (!data.metadata.connection_status) {
    return (
      <div className="flex-1 p-3 flex items-center justify-center">
        <div>
          <svg
            className="mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M216.88,207.93a12,12,0,1,1-17.76,16.14L147.78,167.6a56.06,56.06,0,0,0-52.71,7.1,12,12,0,0,1-14.14-19.4,79.35,79.35,0,0,1,41.92-15.12L103.51,118.9a104.18,104.18,0,0,0-40.06,19.55,12,12,0,0,1-14.9-18.81A128.46,128.46,0,0,1,85.61,99.21l-17.31-19a151.14,151.14,0,0,0-36.68,22.28A12,12,0,1,1,16.39,83.91a175.52,175.52,0,0,1,35-22.38L39.12,48.07A12,12,0,1,1,56.88,31.93ZM128,188a16,16,0,1,0,16,16A16,16,0,0,0,128,188Zm64.55-49.55a12,12,0,0,0,14.9-18.81A127.27,127.27,0,0,0,170,99.05a12,12,0,0,0-7.87,22.67A103.62,103.62,0,0,1,192.55,138.45Zm47.06-54.54A176.33,176.33,0,0,0,128,44c-3.94,0-7.93.13-11.86.39a12,12,0,1,0,1.59,24c3.4-.23,6.86-.34,10.27-.34a152.24,152.24,0,0,1,96.38,34.46,12,12,0,1,0,15.23-18.55Z"></path>
          </svg>
          <p className="text-red-500">
            Connection status error. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-3 space-y-2">
      <h1 className="text-2xl font-bold tracking-wider">
        Hinata General Monitor 🇯🇵
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Last updated {currentTimeAgo}
      </p>
      <div className="pt-3 flex justify-between">
        <div>
          <div className="flex items-center mb-4">
            <span className="text-white text-2xl mr-2">🖥️</span>
            <p
              className={`text-white font-bold text-lg tracking-wide ${ubuntu.className}`}
            >
              {data.hinata_information.name}
            </p>
          </div>
          <p className="text-gray-400">{data.hinata_information.purpose}</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-400 text-sm mr-2">Version:</span>
            <p className="text-gray-400 text-sm">
              {data.hinata_information.version}
            </p>
          </div>
        </div>
        <div className="mr-2">
          <ActivityBlinker
            status={data.metadata.connection_status}
            logic={data.metadata.connection_status ? "Active" : "Terminated"}
          />
        </div>
      </div>
      <div className="flex pt-4 space-x-2">
        <HardwareCard
          title={"CPU Temperature"}
          desc={"SoC @ 1.4GHz"}
          value={data.pie_hardware_data.temp_cpu}
          negative={"High Temperature"}
          positive={"Normal Temperature"}
          threshold={40}
          metric={"˚c"}
        />
        <HardwareCard
          title={"GPU Temperature"}
          desc={"RPi Generic"}
          value={data.pie_hardware_data.temp_gpu}
          negative={"High Temperature"}
          positive={"Normal Temperature"}
          threshold={40}
          metric={"˚c"}
        />
      </div>
      <div className="flex pt-4 space-x-2">
        <HardwareCard
          title={"RAM Usage"}
          desc={"500MB LPDDR2"}
          value={100 - data.pie_hardware_data.ram_used}
          negative={"High Usage"}
          positive={"Normal Usage"}
          threshold={90}
          metric={"%"}
        />
        <HardwareCard
          title={"CPU Utilisation"}
          desc={""}
          value={data.pie_hardware_data.cpu_load}
          negative={"High CPU Utilisation"}
          positive={"Low CPU Utilisation"}
          threshold={90}
          metric={"%"}
        />
      </div>
      <div className="pt-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg mb-4 tracking-wider">
              Hinata Health
            </p>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    data.metadata.hinata_health.server === "UP"
                      ? "bg-gradient-to-br from-green-500 to-green-600"
                      : "bg-gradient-to-br from-red-500 to-red-600 animate-pulse"
                  }`}
                ></div>
                <p
                  className={`text-gray-400 tracking-wide ${
                    data.metadata.hinata_health.server === "UP"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Server Health
                </p>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    data.metadata.hinata_health.ngork === "UP"
                      ? "bg-gradient-to-br from-green-500 to-green-600"
                      : "bg-gradient-to-br from-red-500 to-red-600 animate-pulse"
                  }`}
                ></div>
                <p
                  className={`text-gray-400 tracking-wide ${
                    data.metadata.hinata_health.ngork === "UP"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Ngrok Health
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
