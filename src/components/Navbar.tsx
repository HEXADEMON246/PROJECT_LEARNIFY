
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">
          learn<span>ify</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a
            href="#contact"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
