import React from "react";
import { DarkModeContext } from "./DarkMode";
import { Switch } from "@/components/ui/switch";

export default function howTo() {
  const { darkMode, toggleDisplayMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="h-[100vh] w-full flex items-center justify-center dark:bg-black dark:text-white">
        <div className="border rounded-lg p-4 mx-auto">
          <Switch onClick={toggleDisplayMode} />
        </div>
      </div>
    </div>
  );
}
