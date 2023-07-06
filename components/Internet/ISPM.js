import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ActivityBlinker from "../ActivityBlinker";
import ISPSkeleton from "./ISPSkeleton";
import { getTimeAgo } from "@/utils/timeago";

function ISPM() {
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["isp"],
    queryFn: async () => {
      const res = await fetch(process.env.ISP_URL);
      return await res.json();
    },
    refetchInterval: 5 * 60 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
  });

  if (isLoading || error || isRefetchError) {
    return <ISPSkeleton />;
  }

  const impactCal = (impact) => {
    if (impact < 10) {
      return "🔰";
    } else if ((impact > 10) & (impact < 50)) {
      return "🔰🔰";
    } else if ((impact > 50) & (impact < 80)) {
      return "🔰🔰🔰";
    } else if ((impact > 80) & (impact < 100)) {
      return "🔰🔰🔰🔰";
    } else {
      return "🔰🔰🔰🔰🔰";
    }
  };

  const severity = (impact) => {
    if (impact < 1 || impact == 1) {
      return "⚪️";
    } else if ((impact > 1) & (impact <= 2)) {
      return "⚪️🟢";
    } else if ((impact > 2) & (impact <= 3)) {
      return "⚪️🟢🟤";
    } else if ((impact > 3) & (impact <= 4)) {
      return "⚪️🟢🟤🔴";
    } else {
      return "🛑🛑🛑🛑🛑";
    }
  };

  return (
    <>
      {data.status == "OK" && (
        <div className="flex space-x-4">
          <Image
            className="rounded-md"
            src={data.heatmapImageUrl}
            alt="Image description"
            width={330}
            height={330}
            quality={100}
            placeholder="blur"
            blurDataURL="https://cdn.dribbble.com/users/1051393/screenshots/4318829/media/038dc85d07926b608ceedace6355a3bd.png?compress=1&resize=800x600&vertical=center"
          />
          <div className="flex flex-col space-y-4 pl-6 justify-center">
            <p className="text-sm text-gray-300 tracking-wider">
              {getTimeAgo(data.startTime)}
            </p>
            <p className="text-3xl tracking-wider">
              {`${data.mainDimensionIspValue} event in ${data.down_at}`}{" "}
              <span className="text-gray-300">{`(${data.severity})`}</span>
            </p>
            <div className="flex space-x-10">
              <ActivityBlinker
                font={"text-lg"}
                status={data.active}
                logic={data.active ? "Active Event" : "Inactive Event"}
              />
              <ActivityBlinker
                font={"text-lg"}
                status={data.recent}
                logic={data.recent ? "Recent Event" : "Old Event"}
              />
            </div>
            <div className="bg-black rounded-lg shadow-lg">
              <div className="text-xl font-bold">
                Impact:{" "}
                <span className="text-gray-400 text-base">{` (lasted for ${data.lasted_min} min)`}</span>
              </div>
              <div className="flex items-center mt-2 ">
                <div className="w-full h-6 bg-gray-800 rounded-md">
                  <div
                    className="h-full bg-gradient-to-r from-[#F0C27B] to-[#4B1248] rounded"
                    style={{ width: `${data.impactPerc}%` }}
                  ></div>
                </div>
                <div className="ml-4">{`${data.impactPerc}%`}</div>
              </div>
              <div className="mt-5 flex space-x-4">
                <div className="text-xl font-bold ">Impacted Users:</div>
                <div className="flex items-center">
                  <p className="text-2xl tracking-widest">
                    {impactCal(Number(data.impactedUsersCount).toFixed(0))}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <div className="text-xl font-bold ">Severity:</div>
                <div className="flex items-center">
                  <p className="text-2xl tracking-widest">
                    {severity(Number(data.severityNum).toFixed(0))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ISPM;
