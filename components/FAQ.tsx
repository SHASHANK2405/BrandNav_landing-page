"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
}

interface AccordionItemProps {
  id: number;
  question: string;
  open: number | null;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  open,
  setOpen,
}) => {
  const isOpen = open === id;

  return (
    <div className="border border-gray-300 rounded-lg">
      <button
        className="w-[990px] flex justify-between items-center p-4 px-16 text-lg font-medium text-[#616161] bg-white rounded-lg"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {question}
        <span className="text-2xl font-bold text-[#616161]">
          {isOpen ? "−" : "+"}
        </span>
      </button>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    { id: 1, question: "What is purpose of email verifier?" },
    { id: 2, question: "How do you find email addresses?" },
    { id: 3, question: "What is the purpose of email verifier?" },
    { id: 4, question: "How do you find email addresses?" },
    { id: 5, question: "What is the purpose of email verifier?" },
    { id: 6, question: "How do you find email addresses?" },
  ];

  return (
    <div className="w-full h-auto flex flex-col bg-[#E2E2E2] py-16">
      <div className="w-full flex flex-col items-center gap-14 mb-10">
        <div className="w-[340px] h-[80px] flex flex-col">
          <p className="text-[38px] font-semibold leading-[48px] text-center text-[#2F327D]">
            Got a Question? Get Your Answers
          </p>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col ml-[470px]">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
