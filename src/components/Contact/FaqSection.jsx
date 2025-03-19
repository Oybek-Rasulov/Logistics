import { useState } from "react";
import assets from "../assets";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can trucking companies track my shipment?",
      answer:
        "Yes, most trucking companies offer tracking services that allow you to monitor the progress of your shipment in real time.",
    },
    {
      question: "What should I do if my shipment is delayed?",
      answer: "Contact the shipping company to get an update and alternative solutions.",
    },
    {
      question: "What should I do if my shipment is delayed?",
      answer: "Check with customer support for real-time assistance.",
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
                <img src={assets.faq} alt="image" />
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

export default FaqSection;
