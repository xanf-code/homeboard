function ActivityBlinker({ status, logic, font }) {
  return (
    <div className="flex items-center">
      <div
        className={`w-4 h-4 rounded-full mr-2 ${
          status ? "bg-green-500 animate-pulse" : "bg-red-500"
        }`}
      ></div>
      <p className={`${font} ${status ? "text-green-500" : "text-red-500"}`}>
        {logic}
      </p>
    </div>
  );
}

export default ActivityBlinker;
