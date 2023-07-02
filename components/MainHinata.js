"use client";

import { useQuery } from "@tanstack/react-query";
import HardwareCard from "./HardwareCard";
import ActivityBlinker from "./ActivityBlinker";
import { getTimeAgo } from "@/utils/timeago";

export default function MainHinata() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hinatadata"],
    queryFn: async () => {
      const res = await fetch("https://hinatapi.de/hinata/v1/data");
      return await res.json();
    },
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) {
    return <p>Loading Hinata Information...</p>;
  }

  if (error) {
    return <p>Error fetching Hinata data: {error.message}</p>;
  }

  return (
    <div className="flex-1 p-3 space-y-2">
      <h1 className="text-2xl font-bold">Hinata General Monitor 🇯🇵</h1>
      <p className="mb-4 text-sm text-gray-400">
        Last updated {getTimeAgo(data.metadata.timestamp)}
      </p>
      {data.metadata.connection_status == true && (
        <>
          <div className="p-3 flex justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-white text-2xl mr-2">🖥️</span>
                <p className="text-white font-bold text-lg">
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
                logic={
                  data.metadata.connection_status ? "Active" : "Terminated"
                }
              />
            </div>
          </div>
          <div className="flex p-4 space-x-2">
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
          <div className="flex p-4 space-x-2">
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
          <div className="p-4">
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="text-white font-bold text-lg mb-4">
                  Hinata Health
                </p>
                <div className="flex flex-row space-x-4">
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full mr-2 ${
                        data.metadata.hinata_health.server === "UP"
                          ? "bg-gradient-to-br from-green-500 to-green-600"
                          : "bg-gradient-to-br from-red-500 to-red-600"
                      }`}
                    ></div>
                    <p
                      className={`text-gray-400 ${
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
                          : "bg-gradient-to-br from-red-500 to-red-600"
                      }`}
                    ></div>
                    <p
                      className={`text-gray-400 ${
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
        </>
      )}
    </div>
  );
}
