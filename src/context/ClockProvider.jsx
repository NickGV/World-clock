import { useEffect, useState } from "react";
import { ClockContext } from "./ClockContext";

export const ClockProvider = ({ children }) => {
  const [clocks, setClocks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setClocks(JSON.parse(localStorage.getItem("clocks")) || []);
    console.log("done");
  }, []);

  const addClock = (timezone) => {
    const updatedClocks = [...clocks, timezone];
    setClocks(updatedClocks);
    localStorage.setItem("clocks", JSON.stringify(updatedClocks));
  };

  const removeClock = (timezone) => {
    const updatedClocks = clocks.filter((tz) => tz !== timezone);
    setClocks(updatedClocks);
    localStorage.setItem("clocks", JSON.stringify(updatedClocks));
  };

  return (
    <ClockContext.Provider
      value={{
        clocks,
        query,
        setQuery,
        addClock,
        removeClock,
      }}
    >
      {children}
    </ClockContext.Provider>
  );
};
