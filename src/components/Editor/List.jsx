import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function List() {
  return (
    <div className="h-full w-full">
      {/* main accordion */}
      <Accordion type="multiple" className="w-full h-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] p-5 rounded-t-2xl">
            Manuscript
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex-col">
              <div className="py-5 pl-10 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e]">
                <span>Chapter 1</span>
              </div>
              <div className="py-5 pl-10 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e]">
                <span>Add New Chapter</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] p-5">
            Characters
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex-col">
              <div className="py-5 pl-10 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e]">
                <span>Add Character</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] p-5">
            Locations
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex-col">
              <div className="py-5 pl-10 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e]">
                <span>Add Location</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e] p-5">
            Notes
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex-col">
              <div className="py-5 pl-10 hover:bg-[#e6e6e6] dark:hover:bg-[#383b3e]">
                <span>Create New Note</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
