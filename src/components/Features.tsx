
import { features } from "../data/data";

function Features() {
  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">WHY CHOOSE LEARNIFY?</span>
          <h2>Learning that works for you</h2>
          <p>
            Everything you need to move from learning concepts to building
            real skills.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon size={28} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );  
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
