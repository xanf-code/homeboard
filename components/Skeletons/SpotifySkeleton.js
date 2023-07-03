function SpotifySkeleton() {
  return (
    <div className="flex items-center pt-2">
      <div className="w-14 h-14 rounded-full bg-gray-600"></div>
      <div className="px-4 py-4">
        <div className="w-36 h-4 mt-1 bg-gray-600 rounded"></div>
        <div className="w-24 h-3 mt-2 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}

export default SpotifySkeleton;
