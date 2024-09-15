import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const contents = [
  {
    question: "What are VOICE tokens?",
    answer:
      "Voice tokens are digital assets that can be used to purchase and trade digital assets.",
  },
  {
    question: "How do I get VOICE tokens?",
    answer:
      "VOICE tokens are gotten from swapping other tokens to VOICE tokens.",
  },
  {
    question: "How to Create a Community?",
    answer: "",
  },
  {
    question: "How do I earn on VOA?",
    answer: "",
  },
];

const Faqs = () => {
  return (
    <div className="mx-auto max-w-[61.6875rem]">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-[0.8125rem] lg:space-y-4"
      >
        {contents.map((content, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="bg-white drop-shadow-card rounded-2xl border-none px-5"
          >
            <AccordionTrigger className="text-shark-3 hover:no-underline text-lg font-medium">
              {content.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm font-light lg:text-base text-mako">
              {content.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
