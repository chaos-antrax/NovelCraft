import React from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-full justify-between flex">
      <div className="w-[20%] h-full">
        <Link to="/home">
          <img src={Logo} />
        </Link>
      </div>
      <div className="w-[80%] h-full flex">
        <div className="w-[80%] h-full"></div>
        <div className="w-[20%] h-full flex text-lg">
          <Link
            className="h-full w-[50%] items-center flex p-10 border hover:bg-neutral-200"
            to="/editor"
          >
            Editor
          </Link>
          <Link
            className="h-full w-[50%] items-center flex p-10 hover:bg-neutral-200"
            to="/auth"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
