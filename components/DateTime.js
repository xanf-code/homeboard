"use client";
import { useEffect, useState } from "react";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [date, setdate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const month = date.toLocaleDateString("en-US", { month: "long" });
      const dayNumber = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const twelveHourFormat = hours % 12 || 12;
      const formattedDateTime = `${twelveHourFormat}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;

      setdate(`${day}, ${month} ${dayNumber}`);
      setCurrentDateTime(formattedDateTime);
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl flex space-x-5 items-center">
      {isLoading ? (
        <div>
          <div className="animate-pulse bg-gray-600 w-56 h-12 rounded-md"></div>
          <div className="animate-pulse bg-gray-600 w-44 h-6 mt-1 rounded-md"></div>
        </div>
      ) : (
        <div>
          <p className="text-white font-semibold tracking-wide">
            {currentDateTime}
          </p>
          <p
            className={`text-2xl ${ubuntu.className} text-gray-300 tracking-wide pt-0.5`}
          >
            {date}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateTime;
