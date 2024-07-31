import React from "react";
import Header from "./common/header/Header";
import Body from "./Home/Body";

export default function Home() {
  return (
    <div className="w-full h-lvh">
      <div className="w-full h-[10%] shadow-lg">
        <Header />
      </div>
      <div className="w-full h-[90%] ">
        <Body />
      </div>
    </div>
  );
}
