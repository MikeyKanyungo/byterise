import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="logo"><span className="text-gradient">Byterise</span> Tech</h2>
          <p className="tagline">Engineering Smarter Digital Solutions</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Github size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-col">
            <h3>Company</h3>
            <Link to="/about">About Us</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/insights">Insights / Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="link-col">
            <h3>Services</h3>
            <Link to="/services">Custom Software</Link>
            <Link to="/services">Web Apps</Link>
            <Link to="/services">AI & OCR</Link>
            <Link to="/services">System Integration</Link>
          </div>
          <div className="link-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <Mail size={16} /> info@byterisetech.com
            </div>
            <div className="contact-item">
              <Phone size={16} /> +1 (555) 123-4567
            </div>
            <div className="contact-item">
              <MapPin size={16} /> Tech District, Innovation Ave
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Byterise Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
