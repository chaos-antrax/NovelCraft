import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import List from "./List";
import { DarkModeContext } from "../common/darkmode/DarkMode";

export default function Chapters() {
  const { darkMode, toggleDisplayMode } = useContext(DarkModeContext);

  return (
    <div className="w-full h-full">
      <div className="h-[89%] bg-[#ffffff]/40 shadow-md dark:bg-[#222222] w-full items-center justify-center flex rounded-2xl">
        <List />
      </div>
      <div className="h-[9%] mt-[5%] w-full rounded-2xl flex">
        <div className="h-full w-full ">
          <Link to="/home">
            <img src={Logo} className={darkMode ? "invert-image" : ""} />
          </Link>
        </div>
      </div>
    </div>
  );
}
