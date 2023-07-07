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
    const regex = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/; // Matches floating-point numbers

    const match = str.match(regex);
    if (match) {
      const value = parseFloat(match[0]);
      return value;
    } else {
      return null; // Or you can choose to return a default value or throw an error
    }
  }

  return (
    <div className="flex flex-col space-y-4 pt-12 mt-1">
      <div className="px-8 py-4 h-full flex flex-col justify-center bg-gray-900 rounded-lg w-full space-y-6">
        <h2 className="text-lg font-bold text-white ml-2">👩‍🦰 Amma</h2>
        <p className="mt-2 text-3xl text-white">
          📍{extractFloatFromString(data.bhanu.distance)} Km
        </p>
        <div className="flex items-center space-x-4">
          {data.bhanu.movement_type == "stopped" ? (
            <svg
              className="animate-pulse ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
            </svg>
          ) : (
            <svg
              className="animate-pulse ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8.05,8.05,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.82,6.22,17.29,19.89c11.1,23.41,15.29,58,3.9,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z"></path>
            </svg>
          )}
          <p className="font-bold text-xl">
            {data.bhanu.address.split(",")[0].trim().slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="px-8 py-4 h-full flex flex-col justify-center bg-gray-900 rounded-lg w-full space-y-6">
        <h2 className="text-lg font-bold text-white ml-2">🧔‍♂️ Appa</h2>
        <p className="mt-2 text-3xl text-white">
          📍{extractFloatFromString(data.aswathappa.distance)} Km
        </p>
        <div className="flex items-center space-x-4">
          {data.aswathappa.movement_type == "stopped" ? (
            <svg
              className="animate-pulse ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
            </svg>
          ) : (
            <svg
              className="animate-pulse ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8.05,8.05,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.82,6.22,17.29,19.89c11.1,23.41,15.29,58,3.9,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z"></path>
            </svg>
          )}
          <p className="font-bold text-xl">
            {data.aswathappa.address.split(",")[0].trim().slice(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocationComp;
