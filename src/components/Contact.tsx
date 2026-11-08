
import { useState, } from "react";
import { courses } from "../data/data";
import { CircleCheckBig } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-content">
        <div className="contact-text">
          <span className="eyebrow">TAKE THE NEXT STEP</span>

          <h2>Ready to start learning?</h2>

          <p>
            Tell us what you want to learn, and take the first step toward
            developing your skills.
          </p>

          <ul>
            <li> <CircleCheckBig size={20}/> Practical, skill-focused courses</li>
            <li> <CircleCheckBig size={20}/> Learn at your own pace</li>
            <li> <CircleCheckBig size={20} /> Support throughout your journey</li>
          </ul>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h3>Make an enquiry</h3>
          <p>Fill in your details and choose a course.</p>

          {submitted ? (
            <div className="success-message">
              <span></span>
              <h3>Enquiry submitted!</h3>
              <p>Thank you for your interest in Learnify.</p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="primary-button"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="course">Course of interest</label>
              <select id="course" required defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>

                {courses.map((course) => (
                  <option key={course.title} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>

              <button type="submit" className="submit-button">
                Send Enquiry 
              </button>

              <small className="form-note">
                Demo form only — your enquiry is not sent to a server.
              </small>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
