import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <button className={`accordion ${isActive ? "active" : ""}`} onClick={toggleAccordion}>
        <span className="accordion-text">{question}</span>
        <span className="icon">{isActive ? "−" : "+"}</span>
      </button>
      <div className="panel" style={{ maxHeight: isActive ? "1000px" : "0" }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const faqData = [
    {
      category: "Logistics",
      items: [
        {
          question: "When does the organization meet?",
          answer:
            "General meetings for Fall 2024 will occur biweekly on Wednesdays from 7-8:30. The last 30 minutes are dedicated towards hacktime where teams can collaborate on their projects. Attendance is required for all members.",
        },
        {
          question: "How often do build teams meet?",
          answer:
            "Build teams meet weekly at a time/location convenient to the team. Attendance is required for all build team members.",
        },
        {
          question: "What are the different roles?",
          answer:
            "Our teams are composed of frontend, backend, and machine learning roles. Members can also apply to be build team leads.",
        },
        {
          question: "How much are the dues?",
          answer: "Dues will be $30/semester for the 2024-2025 school year.",
        },
        {
          question: "What social opportunities does Texas Luminescence offer?",
          answer:
            "We host 4-5 socials/semester for our members. Some past examples are an evening at Zilker Park, going on a hike, and playing pickleball at Bouldin Acres! In addition to org-wide socials, individual build teams are encouraged to host socials as well!",
        },
      ],
    },
    {
      category: "Recruitment",
      items: [
        {
          question: "What does the recruitment process look like?",
          answer:
            "Our formal recruitment cycle occurs in the fall. Prospective members are invited to attend an info session, meet team members at an optional coffee chat, and submit an application. Selected individuals will then interview for the teams they applied for. In the spring, we recruit on an as-needed basis for each team.",
        },
        {
          question: "What is included in the application?",
          answer:
            "Our application includes submitting a resume and answering some questions about your interest in Luminescence and skill set.",
        },
        {
          question: "How are interviews conducted?",
          answer:
            "Interviews this year will be 30 minute, in-person time slots with 2 members of our officer team or recruitment committee.",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <h2 className="faq-title">FAQs</h2>
      {faqData.map((section, index) => (
        <div key={index}>
          <h3 className="section-header">{section.category}</h3>
          {section.items.map((item, i) => (
            <AccordionItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordion;