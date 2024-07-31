import React from "react";

export default function NotFound() {
  return (
    <div className="h-full w-full items-center justify-center">
      <div className="w-full items-center justify-center flex mt-24 text-[75px]">
        <h1 className=" font-bold">404!</h1>
      </div>
      <div className="w-full">
        <div className="w-full flex">
          <div className="w-1/2 items-center justify-end pl-96 pr-24 pt-36">
            <span className="text-[24px] text-right flex">
              Oops, looks like the page you're looking for doesn't exist!
            </span>
            <span className="text-[24px] text-right flex mt-4">
              While you wait for your drafts to be recovered, why don't you
              juice up your ideas with a fun little game?
            </span>
          </div>
          <div className="w-1/2 items-center flex pt-20">
            <div className="border border-black h-96 w-96 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
