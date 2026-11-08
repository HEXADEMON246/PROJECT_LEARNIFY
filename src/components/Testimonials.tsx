
import { Star } from "lucide-react";
import { testimonials } from "../data/data";

function Testimonials() {
  return (
    <section className="reviews-section section-bg" id="reviews">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">STUDENT STORIES</span>
          <h2>What our learners say</h2>
          <p>
            Learning is more rewarding when you can see how far you've come.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((person) => (
            <article className="testimonial-card" key={person.name}>
              <div className="stars">
                <Star size={20} color="orange" />
                <Star size={20} color="orange" />
                <Star size={20} color="orange" />
                <Star size={20} color="orange" />
                <Star size={20} color="orange" />
                </div>

              <p className="review-text">
                "{person.review}"
              </p>

              <div className="review-author">
                <div className="avatar">{person.initials}</div>

                <div>
                  <h4>{person.name}</h4>
                  <span>{person.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
