"use client";
import { kavachfetch } from "@/network/fetchstore";
import { useQuery } from "@tanstack/react-query";
import LocationComp from "./LocationComp";

function Pihole() {
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["kavachdata"],
    queryFn: kavachfetch,
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
  });

  if (isLoading || error || isRefetchError) {
    return <p>Fetching..</p>;
  }
  return (
    <div className="flex flex-col">
      <div className="flex space-x-4">
        <div className="w-full">
          <div className="flex flex-row justify-around pt-14">
            <div className="flex flex-col bg-gray-900 rounded-lg w-full">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="bg-teal-200 text-teal-800 text-xl px-2 rounded-md uppercase font-semibold tracking-wide">
                      Total Queries
                    </p>
                    <p className="mt-4 font-semibold text-4xl leading-wide truncate">
                      {data.pie_raw_data.dns_queries_today}
                    </p>
                  </div>
                  <svg
                    className="opacity-90 ml-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.84-6.22l30.46-12.66a8,8,0,0,1,8.47,1.49ZM159.89,105,182.06,79.2A8,8,0,0,0,184,74V50A96,96,0,0,0,50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26A8,8,0,0,0,159.89,105Z"
                      opacity="0.2"
                    ></path>
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around pt-4">
            <div className="flex flex-col bg-gray-900 rounded-lg w-full">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="bg-teal-200 text-teal-800 text-xl px-2 rounded-md uppercase font-semibold tracking-wide">
                      Total Blocked
                    </p>
                    <p className="mt-4 font-semibold text-4xl leading-wide truncate">
                      {data.pie_raw_data.ads_blocked_today}
                    </p>
                  </div>
                  <svg
                    className="opacity-90 ml-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                      opacity="0.2"
                    ></path>
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-around pt-14">
            <div className="flex flex-col bg-gray-900 rounded-lg w-full">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="bg-teal-200 text-teal-800 text-xl px-2 rounded-md uppercase font-semibold tracking-wide">
                      Blocked in %
                    </p>
                    <p className="mt-4 font-semibold text-4xl leading-wide truncate">
                      {data.pie_raw_data.ads_percentage_today}
                    </p>
                  </div>
                  <svg
                    className="ml-4 opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z"
                      opacity="0.2"
                    ></path>
                    <path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around pt-4">
            <div className="flex flex-col bg-gray-900 rounded-lg w-full">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="bg-teal-200 text-teal-800 text-xl px-2 rounded-md uppercase font-semibold tracking-wide">
                      Total Clients
                    </p>
                    <p className="mt-4 font-semibold text-4xl leading-wide truncate">
                      {data.pie_raw_data.unique_clients}
                    </p>
                  </div>
                  <svg
                    className="ml-4 opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z"
                      opacity="0.2"
                    ></path>
                    <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 mt-4 space-y-2 p-4">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#17a349"
            viewBox="0 0 256 256"
          >
            <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm-34.34,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
          <p className="text-lg text-green-600">
            Top Permitted Domain:{" "}
            <span className="ml-1 text-white">
              {data.pie_raw_data.top_query}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#f50000"
            viewBox="0 0 256 256"
          >
            <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.62,75.82,119.34,91,124.38a15.44,15.44,0,0,0,10,0c15.2-5.05,91-34.77,91-124.39V56A16,16,0,0,0,208,40ZM120,96a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path>
          </svg>
          <p className="text-lg text-red-600">
            Top Blocked Domain:{" "}
            <span className="ml-1 text-white">{data.pie_raw_data.top_ad}</span>
          </p>
        </div>
      </div>
      <LocationComp />
    </div>
  );
}

export default Pihole;
