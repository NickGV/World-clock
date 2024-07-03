import "./App.css";
import { MainSection } from "./components/MainSection";

import { ClockProvider } from "./context/ClockProvider";
function App() {
  return (
    <>
      <ClockProvider>
        <header className="p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            World Clock
          </h1>
        </header>
        <MainSection />
      </ClockProvider>
    </>
  );
}

export default App;
