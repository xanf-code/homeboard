function ACSkeleton() {
  return (
    <div className="flex flex-col space-y-6 animate-pulse">
      <h1 className="h-12 w-64 bg-gray-400 rounded"></h1>
      <div className="flex justify-around bg-gray-900 rounded-lg p-8 mt-8 text-center ring-4 ring-gray-400">
        <div className="w-36 h-36 bg-gray-400 rounded-full"></div>
        <div className="flex flex-col justify-between items-start ml-4">
          <div className="h-8 w-32 bg-gray-400 rounded"></div>
          <div className="h-8 w-32 bg-gray-400 rounded"></div>
          <div className="h-8 w-32 bg-gray-400 rounded"></div>
          <div className="h-8 w-32 bg-gray-400 rounded"></div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 bg-gray-900 rounded-lg p-4 px-8">
          <div className="w-16 h-16 bg-gray-400 rounded"></div>
          <p className="mt-2 text-center bg-gray-400 rounded"></p>
        </div>
        <div className="flex-1 bg-gray-900 rounded-lg p-4 px-8">
          <div className="w-16 h-16 bg-gray-400 rounded"></div>
          <p className="mt-2 text-center bg-gray-400 rounded"></p>
        </div>
        <div className="flex-1 bg-gray-900 rounded-lg p-4 px-8">
          <div className="w-16 h-16 bg-gray-400 rounded"></div>
          <p className="mt-2 text-center bg-gray-400 rounded"></p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 bg-gray-900 rounded-lg p-4 px-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-400 rounded"></div>
            <div className="w-32 h-8 bg-gray-400 rounded"></div>
          </div>
          <p className="mt-2 text-center bg-gray-400 rounded"></p>
        </div>
        <div className="flex-1 bg-gray-900 rounded-lg p-4 px-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-400 rounded"></div>
            <div className="w-32 h-8 bg-gray-400 rounded"></div>
          </div>
          <p className="mt-2 text-center bg-gray-400 rounded"></p>
        </div>
      </div>
    </div>
  );
}

export default ACSkeleton;
