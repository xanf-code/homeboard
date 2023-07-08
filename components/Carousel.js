import { useState } from "react";
import classNames from "classnames";
import MainKavach from "./MainKavach";
import MainHinata from "./MainHinata";
import InternetMonitor from "./Internet/InternetMonitor";
import AirCondition from "./SmartHome/AirCondition";
import LocationComp from "./SmartHome/LocationComp";
import Pihole from "./SmartHome/Pihole";

const Carousel = () => {
  const [activeComponent, setActiveComponent] = useState("div1");
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const touchCurrentX = event.touches[0].clientX;
    const swipeDistance = touchStartX - touchCurrentX;
    const swipeThreshold = 100;

    if (swipeDistance > swipeThreshold) {
      setActiveComponent((prevComponent) => {
        if (prevComponent === "div1") return "div2";
        if (prevComponent === "div2") return "div3";
        if (prevComponent === "div3") return "div1";
        return prevComponent;
      });
    } else if (swipeDistance < -swipeThreshold) {
      setActiveComponent((prevComponent) => {
        if (prevComponent === "div1") return "div3";
        if (prevComponent === "div2") return "div1";
        if (prevComponent === "div3") return "div2";
        return prevComponent;
      });
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handleMenuClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const div1Classes = classNames("transition-transform duration-500", {
    "transform translate-x-0": activeComponent === "div1",
    "transform -translate-x-full":
      activeComponent === "div2" || activeComponent === "div3",
  });

  const div2Classes = classNames("transition-transform duration-500", {
    "transform translate-x-full":
      activeComponent === "div1" || activeComponent === "div3",
    "transform translate-x-0": activeComponent === "div2",
  });

  const div3Classes = classNames("transition-transform duration-500", {
    "transform translate-x-full":
      activeComponent === "div1" || activeComponent === "div2",
    "transform translate-x-0": activeComponent === "div3",
  });

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="menu-row">
        <button
          onClick={() => handleMenuClick("div1")}
          className={classNames(
            "text-gray-400 px-4 py-2 rounded-lg mr-2",
            activeComponent === "div1" ? "text-white" : ""
          )}
        >
          Dashboard 👨‍💻
        </button>
        <button
          onClick={() => handleMenuClick("div2")}
          className={classNames(
            "text-gray-400 px-4 py-2 rounded-lg mr-2",
            activeComponent === "div2" ? "text-white" : ""
          )}
        >
          Internet 🛜
        </button>
        <button
          onClick={() => handleMenuClick("div3")}
          className={classNames(
            "text-gray-400 px-4 py-2 rounded-lg",
            activeComponent === "div3" ? "text-white" : ""
          )}
        >
          Smart Home 🏚️
        </button>
      </div>

      <div className="carousel-container">
        {activeComponent === "div1" && (
          <div className={div1Classes}>
            <div className="flex space-x-4 mt-3 ml-1.5">
              <MainKavach />
              <MainHinata />
            </div>
          </div>
        )}
        {activeComponent === "div2" && (
          <div className={div2Classes}>
            <div className="space-x-4 mt-3 ml-1.5">
              <InternetMonitor />
            </div>
          </div>
        )}
        {activeComponent === "div3" && (
          <div className={div3Classes}>
            <div className="flex space-x-4 mt-3 ml-1.5 pt-3 p-4">
              <AirCondition />
              {/* <LocationComp /> */}
              <Pihole />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
