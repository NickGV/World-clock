import { useContext, useEffect, useState } from "react";
import { ClockContext } from "../context/ClockContext";
import moment from "moment-timezone";

export const Result = () => {
  const { query, addClock } = useContext(ClockContext);
  const [time, setTime] = useState(moment().tz(query).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(query).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [query]);

  return (
    <div className="text-white w-full flex flex-col md:flex-row gap-4 items-center justify-center">
      <h1 className="text-7xl font-bold">{time}</h1>
      <div>
        <p className="text-md">Current time in <span className="font-semibold">{query}</span>.</p>
        <button
          type="submit"
          onClick={() => addClock(query)}
          className="text-white-btn-text focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 border "
        >
          Add Clock
        </button>
      </div>
     
    </div>
  );
};
