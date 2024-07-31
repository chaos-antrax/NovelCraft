import React from "react";
import { BsTypeBold, BsTypeUnderline, BsTypeItalic } from "react-icons/bs";

export const TextOps = ({ editor }) => {
  return (
    <div className="flex lg:flex-col w-full rounded-full lg:rounded-full shadow-2xl">
      <div className="bg-[#ffffff]/40 dark:bg-[#222222] rounded-tl-full rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full">
        <button
          title="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-4 rounded-tl-full hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full ${
            editor.isActive("bold")
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          }`}
        >
          <BsTypeBold size={28} />
        </button>
      </div>

      <div className="bg-[#ffffff]/40 dark:bg-[#222222]">
        <button
          title="Italics"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-4 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex ${
            editor.isActive("italic")
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          }`}
        >
          <BsTypeItalic size={28} />
        </button>
      </div>

      <div className="bg-[#ffffff]/40 dark:bg-[#222222] rounded-tr-full lg:rounded-tr-none rounded-br-full lg:rounded-bl-full">
        <button
          title="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-4 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] w-full items-center justify-center flex rounded-tr-full lg:rounded-tr-none rounded-br-full lg:rounded-bl-full lg:rounded-br-full ${
            editor.isActive("underline")
              ? "is-active bg-[#d1d1d1] dark:bg-[#464a4e]"
              : ""
          }`}
        >
          <BsTypeUnderline size={28} />
        </button>
      </div>
    </div>
  );
};
