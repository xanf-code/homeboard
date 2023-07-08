"use client";
import { locationFetch } from "@/network/fetchstore";
import { useQuery } from "@tanstack/react-query";

function LocationComp() {
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["location"],
    queryFn: locationFetch,
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
  });

  if (isLoading || error || isRefetchError) {
    return <p>Fetching...</p>;
  }

  function extractFloatFromString(str) {
    const regex = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/;

    const match = str.match(regex);
    if (match) {
      const value = parseFloat(match[0]);
      return value;
    } else {
      return null;
    }
  }

  return (
    <div className="flex mt-4 h-full space-x-4">
      <div className="flex bg-gray-900 rounded-md p-4 items-center">
        <p className="font-bold text-white mr-1">{`👩‍🦰 Amma is 📍 ${extractFloatFromString(
          data.bhanu.distance
        )} Km away at ${data.bhanu.address
          .split(",")[0]
          .trim()
          .slice(0, 10)}.`}</p>
      </div>
      <div className="flex bg-gray-900 rounded-md p-4 items-center">
        <p className="font-bold text-white mr-1">{`🧔‍♂️ Appa is 📍 ${extractFloatFromString(
          data.aswathappa.distance
        )} Km away at ${data.aswathappa.address
          .split(",")[0]
          .trim()
          .slice(0, 10)}.`}</p>
      </div>
    </div>
  );
}

export default LocationComp;
