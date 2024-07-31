import React, { useState } from "react";
import { TextOps } from "./TextOps";
import { AlignOps } from "./AlignOps";
import ToggleDark from "./ToggleDark";

export const Menu = ({ editor }) => {
  const [model, setModel] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <div className="lg:h-full flex lg:flex-col w-14">
      <div className="btn-array flex lg:flex-col lg:h-[91%]">
        <TextOps editor={editor} />
        <AlignOps editor={editor} />
      </div>
      <div>
        <ToggleDark />
      </div>
    </div>
  );
};
