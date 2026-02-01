import React, { useState } from "react";

const FAQ = () => {
  // 1. The Data Array
  const faqs = [
    {
      question: "How long does a custom piece take to create?",
      answer:
        "As each piece is handcrafted bead-by-bead, the timeline typically spans 2 to 4 weeks. This deliberate pace ensures the structural integrity and meticulous detail BeadChef is known for.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes. BeadChef ships globally. All international orders are tracked and insured to ensure your piece arrives safely from our studio to your door.",
    },
    {
      question: "How should I care for my beaded bag?",
      answer:
        "Store your piece in the provided dust bag. To clean, gently wipe with a soft, damp cloth. Avoid heavy weights to preserve the tension of the hand-woven thread.",
    },
    {
      question: "Are these designs limited edition?",
      answer:
        "To maintain exclusivity, we produce in strictly small batches. Once a specific design is retired, it is rarely reproduced, ensuring your piece remains a unique narrative.",
    },
  ];

  // 2. The State Logic
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-mine text-foreground py-24 px-6 lg:px-20"
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl und relative tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-foreground hover:cursor-pointer`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-9 flex justify-between items-center text-left focus:outline-none group transition-all"
              >
                <span
                  className={`text-md md:text-lg font-light tracking-wide transition-colors duration-300 ${openIndex === index ? "text-foreground font-medium " : " group-hover:"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-2xl font-light transform transition-transform duration-500 ease-out ${openIndex === index ? "rotate-45 text-foreground" : "rotate-0 "}`}
                >
                  +
                </span>
              </button>

              {/* Content Area with Smooth Expand Animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 opacity-100 pb-10"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-foreground font-light leading-relaxed text-base md:text-lg max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
