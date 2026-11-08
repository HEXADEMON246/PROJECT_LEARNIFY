import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import heroImage from "../assets/image.jpg";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">YOUR FUTURE STARTS HERE</span>

          <h1>
            Learn new skills.
            <br />
            <span>Build your future.</span>
          </h1>

          <p>
            Discover practical courses taught by experts. Learn at your own
            pace and gain the skills you need to achieve your goals.
          </p>

          <div className="hero-buttons">
            <a href="#courses" className="primary-button">
              Explore Courses <span>→</span>
            </a>

            <a href="#about" className="secondary-button">
              Why Learnify?
            </a>
          </div>

          <div className="stats">
            <div>
              <h3>10k+</h3>
              <span>Active learners</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Expert courses</span>
            </div>

            <div>
              <h3>95%</h3>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Students learning together"
          />

          <div className="image-note note-top">
            <span className="check-icon"> <FontAwesomeIcon
             icon={faCircleCheck} 
             /></span>
            <div>
              <strong>Keep growing!</strong>
              <small>One lesson at a time</small>
            </div>
          </div>

          <div className="image-note note-bottom">
            
              <strong>Learn anywhere</strong>
              <small>At your own pace</small>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
