import React from "react";

function ISPSkeleton() {
  return (
    <div className="flex space-x-4">
      <div className="rounded-md bg-gray-200 w-80 h-80"></div>
      <div className="flex flex-col space-y-4 pl-6 justify-center">
        <p className="text-3xl tracking-wider">
          <span className="bg-gray-200 w-40 h-8 inline-block"></span>{" "}
          <span className="text-gray-300 bg-gray-200 w-20 h-8 inline-block"></span>
        </p>
        <div className="flex space-x-10">
          <p className="text-lg tracking-wider">
            <span className="bg-gray-200 w-32 h-6 inline-block"></span>
          </p>
          <div className="flex items-center">
            <span className="bg-gray-200 w-20 h-6 inline-block"></span>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 w-20 h-6 inline-block"></span>
          </div>
        </div>
        <div className="bg-black rounded-lg shadow-lg">
          <div className="text-xl font-bold">
            Impact:{" "}
            <span className="text-gray-400 text-base bg-gray-200 w-20 h-6 inline-block"></span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-full h-6 bg-gray-800 rounded-md">
              <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
            </div>
            <div className="ml-4">
              <span className="bg-gray-200 w-10 h-6 inline-block"></span>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="text-xl font-bold">Impacted Users:</div>
            <div className="flex items-center">
              <span className="bg-gray-200 w-20 h-8 inline-block"></span>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="text-xl font-bold">Severity:</div>
            <div className="flex items-center">
              <span className="bg-gray-200 w-20 h-8 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ISPSkeleton;
