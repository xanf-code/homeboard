function PiSkeleton() {
  return (
    <div className="flex flex-1 flex-col pt-3">
      <div className="flex space-x-4">
        <div className="w-full">
          <div className="flex flex-row justify-around pt-14">
            <div className="flex flex-col bg-gray-400 rounded-lg w-full h-32 animate-pulse"></div>
          </div>
          <div className="flex flex-row justify-around pt-4">
            <div className="flex flex-col bg-gray-400 rounded-lg w-full h-32 animate-pulse"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-around pt-14">
            <div className="flex flex-col bg-gray-400 rounded-lg w-full h-32 animate-pulse"></div>
          </div>
          <div className="flex flex-row justify-around pt-4">
            <div className="flex flex-col bg-gray-400 rounded-lg w-full h-32 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 space-y-2 p-4 animate-pulse rounded-md mt-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-400 rounded-full w-10 h-10"></div>
          <p className="text-lg text-gray-400"></p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-400 rounded-full w-10 h-10"></div>
          <p className="text-lg text-gray-400"></p>
        </div>
      </div>
      <div className="w-full animate-pulse pt-2">
        <div className="bg-gray-400 h-14 rounded-md"></div>
      </div>
    </div>
  );
}

export default PiSkeleton;
