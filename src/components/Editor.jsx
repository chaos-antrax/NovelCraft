import React, { useContext, useEffect, useState } from "react";

//components
import Chapters from "./Editor/Chapters";
import TextEditor from "./Editor/TextEditor";

//shadcn components

//custom contexts
import { DarkModeContext } from "./common/darkmode/DarkMode";

export default function Editor() {
  const { darkMode, toggleDisplayMode } = useContext(DarkModeContext);

  return (
    // dark-mode-wrapper
    <div className={`${darkMode ? "dark" : ""} `}>
      {/* main container */}
      <div className="w-full bg-[#FFEEEE] dark:bg-black dark:text-white lg:h-[100vh] lg:flex lg:p-4 lg:overflow-hidden">
        {/* left container */}
        <div className="hidden lg:block h-full w-1/5 rounded-xl">
          <Chapters />
        </div>
        {/* right container */}
        <div className="h-full w-full lg:w-4/5 rounded-xl">
          <TextEditor />
        </div>
      </div>
    </div>
  );
}
