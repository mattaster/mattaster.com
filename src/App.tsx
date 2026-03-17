import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="logo wow-logo">MATT ASTER</Link>
          <div className="nav-links">
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#experience">Experience</a>
            <Link to="/contact" className="btn-primary">Contact</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Matt Aster. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
