function HardwareCard({
  title,
  desc,
  value,
  positive,
  negative,
  threshold,
  metric,
}) {
  return (
    <div className="bg-black flex-1 p-4">
      <div className="flex justify-between text-sm font-normal p-2">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden my-1">
        <div
          className="h-full bg-gradient-to-r from-green-300 to-red-700"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm font-normal p-2">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 ${
              value > threshold ? "bg-red-600" : "bg-green-500"
            } rounded-full mr-2`}
          />
          <p>{value > threshold ? negative : positive}</p>
        </div>
        <p className="text-gray-400">{value + metric}</p>
      </div>
    </div>
  );
}

export default HardwareCard;
