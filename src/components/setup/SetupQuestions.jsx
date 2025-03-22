import { useState } from "react";
import assets from "../assets";

function SetupQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you ensure carrier compliance and safety?",
      answer:
        "We work only with FMCSA-compliant carriers, verifying insurance, operating authority, and safety records before onboarding.",
    },
    {
      question: "What types of freight do you handle?",
      answer: "We handle a variety of freight including dry van, reefer, and flatbed loads.",
    },
    {
      question: "What technology do you use for tracking shipments?",
      answer: "We use GPS tracking and AI-driven logistics solutions for real-time tracking.",
    },
  ];


  return (
    <div className="faq-container">
        <div className="faq-content">
            <div className="header-box">FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    {faq.question}
                    <span>{openIndex === index ? "▼" : "▶"}</span>
                    </div>
                    {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
                ))}
            </div>
        </div>
        <div className="faq-side">
            <div className="faq-image">
                <img src={assets.setup} alt="image" />
            </div>

            <section className="consultation-box">
                <span className="tag">Let's Talk</span>
                <h3 className="mb1">You Need Any Help? Get Free Consultation</h3>
                <p className="consultation-text"><img src={assets.call} alt="icon" /> Have Any Questions <br /> 630 - 686 - 6569</p>
                <button className="contact-btn">Contact Us</button>
            </section>
        </div>
    </div>
  );
};

export default SetupQuestions;