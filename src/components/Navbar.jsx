import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="text-gradient">Byterise</span> Tech
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions hidden-mobile">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <ChevronRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary mobile-btn"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
