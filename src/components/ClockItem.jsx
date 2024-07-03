import moment from "moment-timezone";
import { useContext, useEffect, useState } from "react";
import { ClockContext } from "../context/ClockContext";

export const ClockItem = ({ timezone }) => {
  const { removeClock } = useContext(ClockContext);
  const [time, setTime] = useState(moment().tz(timezone).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="bg-gray-800 text-white w-full max-w-sm mx-auto p-6 rounded-lg shadow-lg flex flex-col gap-4 justify-center border border-gray-700">
      <h1 className="text-2xl font-bold">{time}</h1>
      <div>
        <p className="text-lg">
          Current time in <span className="font-semibold">{timezone}</span>.
        </p>
        <button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          onClick={() => removeClock(timezone)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
