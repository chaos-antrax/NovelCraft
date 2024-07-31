import React from "react";
import { BsAlignStart, BsAlignEnd, BsAlignMiddle } from "react-icons/bs";

export const AlignOps = ({ editor }) => {
  return (
    <div className="flex lg:flex-col ml-6 lg:ml-0 lg:mt-6 w-full rounded-full  shadow-2xl">
      <div className="bg-[#ffffff]/40 dark:bg-[#222222] rounded-tl-full rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full ">
        <button
          title="left"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`px-2 py-4 rounded-tl-full hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full ${
            editor.isActive({ textAlign: "left" })
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          }`}
        >
          <BsAlignStart size={28} />
        </button>
      </div>

      <div className="bg-[#ffffff]/40 dark:bg-[#222222] ">
        <button
          title="center"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`px-2 py-4 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex ${
            editor.isActive({ textAlign: "center" })
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          } `}
        >
          <BsAlignMiddle size={28} />
        </button>
      </div>

      <div className="bg-[#ffffff]/40 dark:bg-[#222222] rounded-br-full rounded-tr-full lg:rounded-tr-none lg:rounded-bl-full">
        <button
          title="right"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`px-2 py-4 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex rounded-tr-full lg:rounded-tr-none rounded-br-full lg:rounded-bl-full ${
            editor.isActive({ textAlign: "right" })
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          }`}
        >
          <BsAlignEnd size={28} />
        </button>
      </div>
    </div>
  );
};
