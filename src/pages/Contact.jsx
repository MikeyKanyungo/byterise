import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Let's Build Together</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ready to elevate your digital infrastructure? Reach out to our engineering and consulting teams.
          </p>
        </div>
      </section>

      <section className="contact-content section container">
        <div className="contact-grid">
          <div className="contact-info glass-panel fade-in-up">
            <h2>Contact Information</h2>
            <p className="text-muted mb-8">We usually respond within 24 hours.</p>
            
            <div className="info-item">
              <div className="info-icon"><Mail className="text-primary" /></div>
              <div>
                <h5>Email Us</h5>
                <p>hello@byterisetech.com</p>
                <p>support@byterisetech.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone className="text-secondary" /></div>
              <div>
                <h5>Call Us</h5>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><MapPin className="text-accent" /></div>
              <div>
                <h5>Office Location</h5>
                <p>Byterise Innovation Hub</p>
                <p>404 Tech District, Silicon Avenue</p>
              </div>
            </div>
            
            <div className="social-connect mt-6">
              <h5>Follow Us</h5>
              <div className="social-links-contact">
                <a href="#" className="social-circle"><Linkedin size={20} /></a>
                <a href="#" className="social-circle"><Twitter size={20} /></a>
                <a href="#" className="social-circle"><Github size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.com" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label>Subject / Interest</label>
                <select className="form-input">
                  <option>Custom Software Development</option>
                  <option>System Integration</option>
                  <option>AI & OCR Solutions</option>
                  <option>Product Demo Request</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project or problem..." className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
