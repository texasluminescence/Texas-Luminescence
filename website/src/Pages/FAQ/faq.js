import React, { useState } from "react";

const AccordionItem = ({ question, answer, isActive, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-left px-4 py-3 bg-gray-100 hover:bg-gray-200"
        onClick={onToggle}
      >
        <span className="font-medium">{question}</span>
        <span className="text-xl">{isActive ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isActive ? "max-h-96" : "max-h-0"
        } overflow-hidden px-4`}
      >
        <p className="py-2 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: "Logistics",
      items: [
        { question: "When does the organization meet?", answer: "General meetings for Fall 2024 will occur biweekly on Wednesdays from 7-8:30. Attendance required." },
        { question: "How often do build teams meet?", answer: "Build teams meet weekly at a time/location convenient to the team. Attendance required." },
        { question: "What are the different roles?", answer: "Frontend, backend, and machine learning roles. Members can apply to be leads." },
        { question: "How much are the dues?", answer: "Dues are $30/semester." },
        { question: "What social opportunities does Texas Luminescence offer?", answer: "We host 4-5 socials/semester. Teams can host their own socials too." },
      ],
    },
    {
      category: "Recruitment",
      items: [
        { question: "What does the recruitment process look like?", answer: "Info session, optional coffee chat, application, and interviews." },
        { question: "What is included in the application?", answer: "Resume and questions about interest and skills." },
        { question: "How are interviews conducted?", answer: "30-minute in-person with 2 officers or committee members." },
      ],
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">{section.category}</h3>
          <div className="space-y-4">
            {section.items.map((item, i) => {
              const itemKey = `${sectionIndex}-${i}`; // unique per item
              return (
                <AccordionItem
                  key={itemKey}
                  question={item.question}
                  answer={item.answer}
                  isActive={activeIndex === itemKey}
                  onToggle={() => toggleItem(itemKey)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
