"use client";
import { kavachfetch } from "@/network/fetchstore";
import { useQuery } from "@tanstack/react-query";
import ACSkeleton from "./ACSkeleton";
import Gauge from "./Gauge";
import BoxWidget from "./Boxwidget";

function AirCondition() {
  const { data, isLoading, error, isRefetchError } = useQuery({
    queryKey: ["kavachdata"],
    queryFn: kavachfetch,
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: false,
    initialData: {},
  });

  if (isLoading || error || isRefetchError) {
    return <ACSkeleton />;
  }

  const mode = (ac_mode) => {
    if (ac_mode == "cool") {
      return (
        <svg
          width={40}
          height={40}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#ffffff"
              d="M170.344 13.625l-17 22.72 17 22.718 17.03-22.72-17.03-22.718zM375.25 21.22l-22.313 29.75 22.313 29.78 22.28-29.78-22.28-29.75zm-130.28 18.5l-22.282 29.75 22.28 29.75 22.313-29.75-22.31-29.75zM54.03 43.093l-17 22.718 17 22.72 17.032-22.72-17.03-22.718zm391.126 24.843l-13.594 29.407-29.437 13.594 29.438 14.156 13.593 28.844 13.563-29.407 29.436-13.593-28.875-13.593-14.124-29.406zm-300.812 13.22l-17.063 36.968-36.968 17.063 36.97 17.78 17.062 36.25 17.03-36.968 36.97-17.063-36.25-17.062-17.75-36.97zm208.594 9.218l-22.313 29.75 22.313 29.78 22.28-29.78-22.28-29.75zM252.78 153.5l-18.5 24.688 18.5 24.718 18.5-24.72-18.5-24.686zm103.032 31.063l-14 30.375-30.375 14 30.375 14.593 14 29.814 14.032-30.375 30.375-14.032-29.783-14-14.625-30.375zM85.406 191.53l-17.03 22.69 17.03 22.718 17-22.72-17-22.687zm94.125 27.064l-17 22.72 17 22.717 17.032-22.717-17.03-22.72zm72.657 24.062c-7.673.11-14.296 4.334-21.687 10.03-46.035 35.503-104.323 87.027-105.03 115.814-8.237.98-15.564 5.264-15.564 12.813 0 11.258 15.384 15.297 26.625 12.25-.138.687-.218 1.404-.218 2.156 0 16.076 31.4 17.454 37.25 4.467 34.6 9.25 77.038 10.805 115.813 6.157 2.352 14.95 33.956 15.173 37.688 1.03 10.247 7.523 28.91 7.963 40.218 1.376 10.675 6.772 32.408 3.443 32.408-9.813 0-1.963-.465-3.7-1.313-5.218 5.86-2.54 10.063-6.99 10.063-13.376 0-14.332-21.145-18.725-34.72-13.594-4.536-31.173-59.7-84.754-100.874-115.688-8.093-6.08-14.688-8.492-20.656-8.406zM76.72 355.062c-10.75.023-21.5 5.02-21.5 14.907 0 19.773 43 19.4 43 0 0-9.978-10.753-14.93-21.5-14.908zm390.436 13.032c-9.547.042-19.094 4.416-19.094 13.03 0 17.73 38.188 17.568 38.188 0 0-8.783-9.547-13.072-19.094-13.03zm-428.75 15.72c-9.547.018-19.093 4.434-19.093 13.217 0 17.57 38.187 17.234 38.187 0 0-8.862-9.547-13.237-19.094-13.217zm411.72 23.498c-10.75.023-21.5 5.02-21.5 14.907 0 19.775 42.968 19.4 42.968 0 0-9.98-10.72-14.93-21.47-14.908zm-273.845 6.594c-6 .013-11.994 1.765-15.624 5.25-11.234-4.884-29.875-1.086-29.875 11.188 0 14.306 25.317 16.71 34.72 7.812 11.234 4.8 29.875 1.01 29.875-11.03 0-8.864-9.547-13.24-19.094-13.22zm87.22 1.594c-9.547.042-19.094 4.415-19.094 13.03 0 17.727 38.188 17.57 38.188 0 0-8.782-9.547-13.072-19.094-13.03zm-192 9.375c-9.547.02-19.094 4.435-19.094 13.22 0 17.566 38.188 17.23 38.188 0 0-8.865-9.547-13.24-19.094-13.22zM370 438.063c-9.547.04-19.094 4.446-19.094 13.062 0 9.873 11.848 14.203 22.344 13.063-.717 1.552-1.094 3.284-1.094 5.187 0 18.818 36.526 20.522 43.75 5.53 10.313.833 21.625-3.56 21.625-13.124 0-14.715-26.8-16.88-35.5-7.06-4.325-.91-9.065-.96-13.467-.19.345-1.054.53-2.18.53-3.405 0-8.784-9.546-13.104-19.093-13.063zm-150.906 3.5c-10.948.048-21.875 5.09-21.875 14.968 0 20.33 43.78 20.146 43.78 0 0-10.07-10.958-15.016-21.906-14.967zm100.594 17.687c-12.55.026-25.094 5.86-25.094 17.406 0 23.09 50.187 22.65 50.187 0 0-11.65-12.544-17.432-25.092-17.406zm-153 6.72c-10.948.047-21.907 5.087-21.907 14.967 0 20.328 43.782 20.145 43.782 0 0-10.072-10.927-15.016-21.875-14.968z"
            ></path>
          </g>
        </svg>
      );
    } else if (ac_mode == "heat") {
      return (
        <svg
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8 12H14M5 9H16.5C17.8807 9 19 7.88071 19 6.5C19 5.11929 17.8807 4 16.5 4M4 15H17C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    } else if (ac_mode == "fan") {
      return (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z"
            ></path>{" "}
            <path d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z"></path>{" "}
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          width={40}
          height={40}
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M18,2a4,4,0,1,0,4,4A4,4,0,0,0,18,2Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,8ZM15,20H13V18a1,1,0,0,0-2,0v2H9V16.62l3.45-1.73A1,1,0,0,0,13,14V10a1,1,0,0,0-2,0v3.38l-2,1V8A1,1,0,0,0,7,8v8.38l-2-1V13a1,1,0,0,0-2,0v3a1,1,0,0,0,.55.89L7,18.62V20H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z"></path>
          </g>
        </svg>
      );
    }
  };

  const fan = (ac_mode) => {
    if (ac_mode == "quiet" || ac_mode == "low") {
      return (
        <svg
          height={40}
          width={40}
          fill="#ffffff"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>low-signal</title>{" "}
            <path d="M8.736 17.984l2.912 2.912q1.792-1.792 4.352-1.792t4.352 1.792l2.912-2.912q-1.952-1.952-4.608-2.656t-5.312 0-4.608 2.656zM11.904 25.248q0 1.728 1.184 2.912t2.912 1.216 2.912-1.216 1.184-2.912-1.184-2.88-2.912-1.216-2.912 1.216-1.184 2.88z"></path>{" "}
          </g>
        </svg>
      );
    } else if (ac_mode == "medium_low" || ac_mode == "medium") {
      return (
        <svg
          height={40}
          width={40}
          fill="#ffffff"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>medium-signal</title>{" "}
            <path d="M4.352 13.632l2.944 2.912q2.336-2.368 5.536-3.232t6.336 0 5.568 3.232l2.912-2.912q-2.368-2.368-5.472-3.616t-6.176-1.216-6.176 1.216-5.472 3.616zM8.736 17.984l2.912 2.912q1.792-1.792 4.352-1.792t4.352 1.792l2.912-2.912q-1.952-1.952-4.608-2.656t-5.312 0-4.608 2.656zM11.904 25.248q0 1.728 1.184 2.912t2.912 1.216 2.912-1.216 1.184-2.912-1.184-2.88-2.912-1.216-2.912 1.216-1.184 2.88z"></path>{" "}
          </g>
        </svg>
      );
    } else if (ac_mode == "high" || ac_mode == "strong") {
      return (
        <svg
          height={40}
          width={40}
          fill="#ffffff"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>full-signal</title>{" "}
            <path d="M0 9.248l2.912 2.944q2.656-2.688 6.144-4.064t6.944-1.376 6.976 1.376 6.112 4.064l2.912-2.944q-2.592-2.592-5.856-4.224t-6.688-2.112-6.912 0-6.688 2.112-5.856 4.224zM4.352 13.632l2.944 2.912q2.336-2.368 5.536-3.232t6.336 0 5.568 3.232l2.912-2.912q-2.368-2.368-5.472-3.616t-6.176-1.216-6.176 1.216-5.472 3.616zM8.736 17.984l2.912 2.912q1.792-1.792 4.352-1.792t4.352 1.792l2.912-2.912q-1.952-1.952-4.608-2.656t-5.312 0-4.608 2.656zM11.904 25.248q0 1.696 1.184 2.912t2.912 1.216 2.912-1.216 1.184-2.912-1.184-2.88-2.912-1.216q-1.696 0-2.912 1.184t-1.184 2.912z"></path>{" "}
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          height={40}
          width={40}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0614 9.67972L16.4756 11.0939L17.8787 9.69083L16.4645 8.27662L15.0614 9.67972ZM16.4645 6.1553L20 9.69083L8.6863 21.0045L5.15076 17.469L16.4645 6.1553Z"
              fill="#ffffff"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.364 5.06066L9.59619 6.82843L8.53553 5.76777L10.3033 4L11.364 5.06066ZM6.76778 6.82842L5 5.06067L6.06066 4L7.82843 5.76776L6.76778 6.82842ZM10.3033 10.364L8.53553 8.5962L9.59619 7.53554L11.364 9.3033L10.3033 10.364ZM7.82843 8.5962L6.06066 10.364L5 9.3033L6.76777 7.53554L7.82843 8.5962Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
      );
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-2xl font-bold tracking-wider">Smart Monitor ⚡️🖥️</h1>
      <div
        className={`flex justify-around bg-gray-900 rounded-lg p-8 mt-8 text-center ring-4 ${
          data.ac_data.temperature < 22 ? "ring-blue-700" : "ring-red-700"
        }`}
      >
        <Gauge temperature={data.ac_data.temperature} />
        <div className="flex flex-col justify-between items-start">
          <p className="text-gray-400 text-sm font-bold">
            Humidity:
            <span className="text-white">{" " + data.ac_data.humidity}</span>
          </p>
          <p className="text-gray-400 text-sm font-bold">
            CO2:
            <span className="text-white">{" " + data.ac_data.co2}</span>
          </p>
          <p className="text-gray-400 text-sm font-bold">
            IAQ:
            <span className="text-white">{" " + data.ac_data.iaq}</span>
          </p>
          <p className="text-gray-400 text-sm font-bold">
            TVOC:
            <span className="text-white">{" " + data.ac_data.tvoc}</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div
          className={`${
            data.ac_data.on ? "bg-white" : "bg-gray-900"
          } rounded-lg p-4 px-8 flex-1 `}
        >
          <div className="flex justify-center mb-2">
            {data.ac_data.on ? (
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V3ZM8.6092 5.8744C9.09211 5.60643 9.26636 4.99771 8.99839 4.5148C8.73042 4.03188 8.12171 3.85763 7.63879 4.1256C4.87453 5.65948 3 8.61014 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66747 19.1882 5.75928 16.5007 4.20465C16.0227 3.92811 15.4109 4.09147 15.1344 4.56953C14.8579 5.04759 15.0212 5.65932 15.4993 5.93586C17.5942 7.14771 19 9.41027 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.3658 6.45462 7.06997 8.6092 5.8744Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V3ZM8.6092 5.8744C9.09211 5.60643 9.26636 4.99771 8.99839 4.5148C8.73042 4.03188 8.12171 3.85763 7.63879 4.1256C4.87453 5.65948 3 8.61014 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66747 19.1882 5.75928 16.5007 4.20465C16.0227 3.92811 15.4109 4.09147 15.1344 4.56953C14.8579 5.04759 15.0212 5.65932 15.4993 5.93586C17.5942 7.14771 19 9.41027 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.3658 6.45462 7.06997 8.6092 5.8744Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
          <p
            className={`${
              data.ac_data.on ? "text-black" : "text-white"
            } mt-1 text-center`}
          >
            {data.ac_data.on ? "ON" : "OFF"}
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 px-8 flex-1">
          <div className="flex justify-center mb-2">
            {mode(data.ac_data.mode)}
          </div>
          <p className="text-center mt-1 text-sm">{data.ac_data.mode}</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 px-8 flex-1">
          <div className="flex justify-center mb-2">
            {fan(data.ac_data.fan)}
          </div>
          <p className="text-center mt-1 text-sm">{data.ac_data.fan}</p>
        </div>
      </div>
      <div className="space-x-4 flex">
        <BoxWidget
          title="💡 AC State"
          value={
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"></path>
              </svg>
              <p>
                {Number(data.ac_data.last_toggle / 60 / 60).toFixed(1)} hours
              </p>
            </div>
          }
          description="State of the last AC change time elapsed."
        />
        <BoxWidget
          title="🚪 Door status"
          value={
            data.door_status.state == 0 ? (
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
                </svg>
              </div>
            ) : (
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z"></path>
                </svg>
              </div>
            )
          }
          description="Door status open/close for room door."
        />
      </div>
    </div>
  );
}

export default AirCondition;
