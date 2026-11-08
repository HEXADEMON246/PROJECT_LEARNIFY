
import { useState } from "react";
import { faqs } from "../data/data";

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">GOT QUESTIONS?</span>
          <h2>Frequently asked questions</h2>
          <p>
            Find answers to some common questions about learning with us.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>

                <span className="faq-symbol">
                  {openFaq === index ? "-" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
