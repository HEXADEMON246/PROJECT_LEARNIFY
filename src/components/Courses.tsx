import { courses } from "../data/data";

function Courses() {
  return (
    <section className="courses-section section-bg" id="courses">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">LEARN SOMETHING NEW</span>
          <h2>Explore our popular courses</h2>
          <p>
            Practical learning experiences designed to help you develop
            skills that matter.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article className="course-card" key={course.title}>
                <div className={`course-cover ${course.color}`}>
                  <span className="course-icon">
                    <Icon size={24} />
                  </span>

                  <span className="course-category">
                    {course.category}
                  </span>
                </div>

                <div className="course-details">
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>

                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>

                <div className="course-footer">
                  <strong>{course.price}</strong>
                  <a href="#contact">Learn more →</a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="view-all">
          <a href="#contact" className="secondary-button">
            View All Courses <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Courses;