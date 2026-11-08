
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              learn<span>ify</span>
            </a>

            <p>
              Helping curious minds develop practical skills and build
              brighter futures.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="#courses">Courses</a>
            <a href="#about">About us</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div>
            <h4>Get started</h4>
            <a href="#contact">Contact us</a>
            <a href="#courses">Explore courses</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span> 2026 Learnify. All rights reserved.</span>
          <span>Learn something new every day.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
