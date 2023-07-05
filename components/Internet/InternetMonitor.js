import ISPM from "./ISPM";
import InternetSpeed from "./InternetSpeed";

function InternetMonitor() {
  return (
    <div className="p-3 space-y-10">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-wider">
          Internet Speed Monitor ⚡️
        </h1>
        <div className="flex justify-center">
          <InternetSpeed />
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-wider">
          Internet Service Provider Activity 🌐
        </h1>
        <ISPM />
      </div>
    </div>
  );
}

export default InternetMonitor;
