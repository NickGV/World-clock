import { useContext } from "react";
import { ClockContext } from "../context/ClockContext";
import { ClockItem } from "./ClockItem";

export const ClocksList = ({ className }) => {
  const { clocks } = useContext(ClockContext);

  return (
    <div className={`${className} md:flex text-white flex-col`}>
      <h1 className="mb-4 font-bold text-xl">Clocks</h1>
      {clocks.map((timezone, index) => (
        <>
          <ClockItem key={index} timezone={timezone} />
        </>
      ))}
    </div>
  );
};
