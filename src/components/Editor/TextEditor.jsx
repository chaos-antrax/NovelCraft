import React from "react";

import { Menu } from "./menu/Menu";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Typography from "@tiptap/extension-typography";
import FontFamily from "@tiptap/extension-font-family";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [
      Heading,
      Paragraph,
      Document,
      Text,
      StarterKit,
      Underline,
      Typography,
      FontFamily,
      HorizontalRule.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      Placeholder.configure({ placeholder: "Start writing here ..." }),
      CharacterCount,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    autofocus: false,
  });

  const handleFocus = () => {
    editor.commands.focus();
  };

  return (
    <div className="w-full h-full">
      <div className="container w-full h-full lg:items-start lg:justify-start lg:flex">
        <div className="absolute lg:relative bg-[#ffffff]/40 shadow-md caret-black dark:caret-white dark:bg-[#222222] h-full w-full rounded-3xl focus:outline-none flex-col">
          <div className="h-[95%] w-full">
            <div className="h-full w-full p-5">
              <EditorContent
                className="h-full w-full p-5 text-left overflow-y-auto scrollbar"
                editor={editor}
                onClick={handleFocus}
              />
            </div>
          </div>
          <div className="pr-5 items-end justify-end flex">
            {editor && editor.storage && (
              <span className="dark:text-[#ffffff]/40">
                {editor.storage.characterCount.words()} words
              </span>
            )}
          </div>
        </div>
        <div className="absolute mt-4 z-10 lg:relative lg:w-14 lg:pl-6">
          <Menu editor={editor} />
        </div>
      </div>
    </div>
  );
}
