import { useContext } from "react";
import { ClockContext } from "../context/ClockContext";
import { Result } from "./Result";
import { InputForm } from "./InputForm";

export const SearchSection = () => {
  const { query } = useContext(ClockContext);

  return (
    <div className="w-full  md:w-4/5 flex flex-col items-center justify-evenly">
      <InputForm />
      {query ? (
        <Result />
      ) : (
        <h1 className="text-white text-2xl">Select a timezone</h1>
      )}
    </div>
  );
};
