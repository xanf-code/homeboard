const BoxWidget = ({ title, value, description }) => {
  return (
    <div className="px-4 py-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="mt-4 text-3xl font-bold text-white">{value}</p>
      <p className="mt-4 text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default BoxWidget;
