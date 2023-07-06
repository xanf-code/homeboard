import { useQuery } from "@tanstack/react-query";
import SpeedSkeleton from "./SpeedSkeleton";

function InternetSpeed() {
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["internetspeed"],
    queryFn: async () => {
      const res = await fetch(process.env.SPEED_URL);
      return await res.json();
    },
    refetchInterval: 5 * 60 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
  });

  if (isLoading || error || isRefetchError) {
    return <SpeedSkeleton />;
  }

  return (
    <div className="flex space-x-20">
      <div className="flex flex-col">
        <div className="flex items-end space-x-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M71.51,88.49a12,12,0,0,1,17-17L116,99V24a12,12,0,0,1,24,0V99l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0ZM224,116H188a12,12,0,0,0,0,24h32v56H36V140H68a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116Zm-20,52a16,16,0,1,0-16,16A16,16,0,0,0,204,168Z"></path>
          </svg>
          <p className="text-2xl font-bold">DOWNLOAD</p>
          <p className="text-gray-400">Mbps</p>
        </div>
        <p className="text-5xl font-bold text-center">{data.download[0]}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end space-x-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z"></path>
          </svg>
          <p className="text-xl font-bold">UPLOAD</p>
          <p className="text-gray-400">Mbps</p>
        </div>
        <p className="text-5xl font-bold text-center">{data.upload[0]}</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-end space-x-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M216.49,184.49l-32,32a12,12,0,0,1-17-17L179,188H48a12,12,0,0,1,0-24H179l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,216.49,184.49Zm-145-64a12,12,0,0,0,17-17L77,92H208a12,12,0,0,0,0-24H77L88.49,56.49a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17Z"></path>
          </svg>
          <p className="text-xl font-bold">PING</p>
          <p className="text-gray-400">ms</p>
        </div>
        <p className="text-5xl font-bold text-center">{data.ping}</p>
      </div>
    </div>
  );
}

export default InternetSpeed;
