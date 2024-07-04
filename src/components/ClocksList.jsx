import { useContext } from "react";
import { ClockContext } from "../context/ClockContext";
import { ClockItem } from "./ClockItem";

export const ClocksList = ({ className }) => {
  const { clocks } = useContext(ClockContext);

  return (
    <div className={`${className} md:flex text-white flex-col gap-3 h-full`}>
      <h1 className="mb-4 font-bold text-xl">Clocks</h1>
      <div className="md:flex md:flex-col grid grid-cols-2 gap-3 overflow-y-auto h-full">
        {clocks.map((clock) => (
          <>
            <ClockItem key={clock.index} timezone={clock.timezone} isoCode={clock.isoCode} />
          </>
        ))}
      </div>
    </div>
  );
};
