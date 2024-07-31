import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

export default function Body() {
  return (
    <div className="snap-mandatory snap-y h-full 2-full overflow-y-scroll no-scrollbar">
      <div className="h-full w-full snap-center">
        <Slide1 />
      </div>
      <div className="h-full w-full snap-center snap-normal">
        <Slide2 />
      </div>
      <div className="h-full 2-full snap-center">
        <Slide3 />
      </div>
    </div>
  );
}
