function WeatherSkeleton() {
  return (
    <div className="space-y-2.5 p-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-600"></div>
        <div className="w-16 h-5 bg-gray-600 rounded"></div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="w-12 h-5 bg-gray-600 rounded"></div>
        <div className="w-8 h-4 bg-gray-600 rounded"></div>
        <div className="w-12 h-5 bg-gray-600 rounded"></div>
        <div className="w-8 h-4 bg-gray-600 rounded"></div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="w-12 h-5 bg-gray-600 rounded"></div>
        <div className="w-8 h-4 bg-gray-600 rounded"></div>
        <div className="w-12 h-5 bg-gray-600 rounded"></div>
        <div className="w-8 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}

export default WeatherSkeleton;
