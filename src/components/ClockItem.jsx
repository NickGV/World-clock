import moment from "moment-timezone";
import { useContext, useEffect, useState } from "react";
import { ClockContext } from "../context/ClockContext";

export const ClockItem = ({ timezone, isoCode }) => {
  const { removeClock } = useContext(ClockContext);
  const [time, setTime] = useState(moment().tz(timezone).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="bg-gray-800 text-white w-full h-44 p-4 rounded-lg shadow-lg flex flex-col justify-center border border-gray-700 relative">
      <div>
        <img
          src={`https://flagsapi.com/${isoCode}/flat/64.png`}
          alt={`${isoCode} flag`}
          className="w-10 h-10 mb-2"
        />
      </div>
      <h1 className="text-2xl font-bold">{time}</h1>
      <div>
        <p className="text-lg">
          Time in <span className="font-semibold">{timezone}</span>.
        </p>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-orange-500 hover:scale-110"
          onClick={() => removeClock(timezone)}
        >
          X
        </button>
      </div>
    </div>
  );
};
