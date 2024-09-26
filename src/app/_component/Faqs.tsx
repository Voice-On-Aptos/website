import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const contents = [
    {
        question: "What is VOA?",
        answer: "VOA is a decentralized, community-focused platform for projects on the Aptos blockchain.",
    },
    {
        question: "How do I join a community?",
        answer: "Browse the available communities on VOA, and stake the project tokens to get VOICE. Once you have VOICE, you can join the community and start participating.",
    },
    {
        question: "What are VOICE tokens?",
        answer: "VOICE tokens are the utility tokens needed to participate in community activities like posting, voting, and making proposals.",
    },
    {
        question: "Can I swap my VOICE back to project tokens?",
        answer: "Yes, you can unstake your VOICE and swap it back, but a 24-hour cooldown period is required.",
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
