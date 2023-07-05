function SpeedSkeleton() {
  return (
    <div className="flex space-x-20">
      <div className="flex flex-col items-center">
        <div className="flex items-end space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
          <div className="w-24 h-6 bg-gray-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
        <div className="w-24 h-16 bg-gray-600 rounded mt-4"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-end space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
          <div className="w-24 h-6 bg-gray-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
        <div className="w-24 h-16 bg-gray-600 rounded mt-4"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-end space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
          <div className="w-24 h-6 bg-gray-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
        <div className="w-24 h-16 bg-gray-600 rounded mt-4"></div>
      </div>
    </div>
  );
}

export default SpeedSkeleton;
