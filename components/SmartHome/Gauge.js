const Gauge = ({ temperature }) => {
  const tempPercentage =
    Math.min(Math.max((temperature - 16) / (30 - 16), 0), 1) * 100;

  const strokeDasharray = `${(Math.PI * 45 * tempPercentage) / 100} 141.3`;

  return (
    <div className="flex items-center justify-center h-32">
      <svg viewBox="0 0 100 50" className="w-64 h-32">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#007bff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#333"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#grad1)"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="70"
        />
        <text
          x="50"
          y="30"
          textAnchor="middle"
          dy=".8em"
          fontSize="21"
          fill="#fff"
          fontWeight="bold"
        >
          {temperature}°C
        </text>
      </svg>
    </div>
  );
};

export default Gauge;
