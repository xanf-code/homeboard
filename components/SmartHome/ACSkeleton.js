function ACSkeleton() {
  return (
    <div className="flex flex-grow flex-col items-center space-y-6">
      <p className="text-3xl font-semibold">AC and Door Monitor</p>
      <div className="bg-gray-900 rounded-lg p-8 text-center ring-4 ring-gray-600">
        <div className="h-24 w-40 bg-gray-600 rounded-full"></div>
      </div>
      <div className="flex space-x-4">
        <div className="bg-gray-900 rounded-lg p-4 px-2">
          <div className="h-16 w-16 bg-gray-600 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-600 rounded-md mt-1"></div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 px-2">
          <div className="h-16 w-16 bg-gray-600 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-600 rounded-md mt-1"></div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 px-2">
          <div className="h-16 w-16 bg-gray-600 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-600 rounded-md mt-1"></div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-4 px-8 w-[35%]">
        <div className="h-12 bg-gray-600 rounded-md"></div>
      </div>
    </div>
  );
}

export default ACSkeleton;
