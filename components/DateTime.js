import { useEffect, useState } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl flex space-x-5">
      <p>{currentTime}</p>
    </div>
  );
};

export default DateTime;
