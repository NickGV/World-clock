import { useState } from "react";
import { ClocksList } from "./ClocksList";
import { NavBar } from "./NavBar";
import { SearchSection } from "./SearchSection";
export const MainSection = () => {
  const [showPage, setSetshowPage] = useState("search");
  return (
    <main className="w-full h-90 flex p-4 ">
      <NavBar setSetshowPage={setSetshowPage} />
      {showPage === "search" ? (
        <>
          <SearchSection />
          <ClocksList className="hidden"/>
        </>
      ) : (
        <ClocksList className="flex"/>
      )}
    </main>
  );
};
