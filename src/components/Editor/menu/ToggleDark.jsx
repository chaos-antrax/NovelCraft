import React, { useContext } from "react";
import { DarkModeContext } from "@/components/common/darkmode/DarkMode";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function ToggleDark() {
  const { darkMode, toggleDisplayMode } = useContext(DarkModeContext);

  return (
    <div className="flex-col ml-5 lg:ml-0 lg:mt-5">
      <div className="h-14 w-14 bg-[#ffffff]/40 dark:bg-[#222222] rounded-full border border-black/20 items-center justify-center flex">
        <button onClick={toggleDisplayMode}>
          {darkMode ? <CiLight size={30} /> : <MdDarkMode size={30} />}
        </button>
      </div>
    </div>
  );
}
