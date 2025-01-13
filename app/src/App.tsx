import { useEffect } from "react";
import AnimationSettings from "./components/playground/Settings";
import Preview from "./components/preview/Preview";
import ControlWrapper from "./components/playground/controls/ControlWrapper";

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 w-full">
      <div className="grid grid-cols-3 gap-4 w-full h-[95vh] border border-gray-200 rounded-lg p-4">
        <div className="col-span-2 overflow-auto scrollbar-hide">
          <Preview />
        </div>
        <div className="flex flex-col gap-4 overflow-auto scrollbar-hide">
          <ControlWrapper />
          <AnimationSettings />
        </div>
      </div>
    </div>
  );
}

export default App;
