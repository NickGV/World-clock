import { useContext, useEffect, useState } from "react";
import { ClockContext } from "../context/ClockContext";
import moment from "moment-timezone";
import TimeZones from "../helpers/Timezones.json";


export const Result = () => {
  const [isoCode, setIsoCode] = useState('')
  const { query, addClock } = useContext(ClockContext);
  const [time, setTime] = useState(moment().tz(query).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(query).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [query]);
  useEffect(()=>{
    findIsoCode()
  },[query])

  const findIsoCode = () => {
    const country = TimeZones.find(item => item.Timezone === query);
    if (country) {
      setIsoCode(country.ISO);
    } else {
      setIsoCode('Timezone not found');
    }
  };

  return (
    <div className="text-white w-full flex flex-col md:flex-row gap-4 items-center justify-center">
       <div >
        <img src={`https://flagsapi.com/${isoCode}/flat/64.png`} alt="" />
      </div>
      <h1 className="text-7xl font-bold">{time}</h1>
      <div>
        <p className="text-md">Current time in <span className="font-semibold">{query}</span>.</p>
        <button
          type="submit"
          onClick={() => addClock(query,isoCode)}
          className="text-white-btn-text focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 border "
        >
          Add Clock
        </button>
      </div>
     
    </div>
  );
};
