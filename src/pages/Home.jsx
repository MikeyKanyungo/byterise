import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <div className="badge">Innovate • Accelerate • Scale</div>
            <h1 className="hero-title">
              Engineering <span className="text-gradient">Smarter</span> <br /> 
              Digital Solutions
            </h1>
            <p className="hero-description text-muted">
              Byterise Tech develops modern digital infrastructure for businesses ready to move faster and smarter. We build secure platforms, intelligent automation tools, and custom software that simplify complex operations.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/products" className="btn btn-outline">
                Explore Our Products
              </Link>
            </div>
          </div>
          <div className="hero-visual fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel mockup-panel">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-body">
                {/* Abstract Data Visualization */}
                <div className="data-bar" style={{ width: '80%' }}></div>
                <div className="data-bar" style={{ width: '65%' }}></div>
                <div className="data-bar" style={{ width: '90%' }}></div>
                <div className="metric-box">
                  <div className="metric-value text-gradient-animated">+125%</div>
                  <div className="metric-label">Efficiency Gain</div>
                </div>
              </div>
            </div>
            {/* Background Glows */}
            <div className="glow-orb primary-orb"></div>
            <div className="glow-orb secondary-orb"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">Platforms Built to <span className="text-gradient">Perform</span></h2>
            <p className="text-muted max-w-2xl mx-auto">Discover our ecosystem of enterprise-grade solutions designed to streamline operations and unlock growth.</p>
          </div>
          
          <div className="product-grid">
            <div className="product-card glass-panel fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card-icon"><ShieldCheck size={32} /></div>
              <h3>KYC / ID Verification</h3>
              <p className="text-muted">OCR + facial verification system for robust identity authentication.</p>
              <Link to="/products" className="card-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="product-card glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-icon"><Layers size={32} /></div>
              <h3>Enterprise Loan Management</h3>
              <p className="text-muted">Multi-tenant platform empowering financial institutions with automation.</p>
              <Link to="/products" className="card-link">Learn More <ArrowRight size={16} /></Link>
            </div>
            <div className="product-card glass-panel fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card-icon"><Cpu size={32} /></div>
              <h3>AI & OCR Solutions</h3>
              <p className="text-muted">Extract, analyze, and automate data workflows with intelligent AI models.</p>
              <Link to="/products" className="card-link">Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="services section">
        <div className="container">
          <div className="services-container glass-panel">
            <div className="services-content">
              <h2>End-to-End <br/> <span className="text-gradient">Technology Partner</span></h2>
              <p className="text-muted">From concept to deployment, our engineering teams deliver solutions that align with your strategic goals.</p>
              <ul className="service-list">
                <li><ArrowRight size={16} className="text-primary"/> Custom Software Development</li>
                <li><ArrowRight size={16} className="text-primary"/> Web Application Engineering</li>
                <li><ArrowRight size={16} className="text-primary"/> Business Process Automation</li>
                <li><ArrowRight size={16} className="text-primary"/> Complex System Integration</li>
              </ul>
              <Link to="/services" className="btn btn-primary mt-6">View All Services</Link>
            </div>
            <div className="services-visual">
              <div className="abstract-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta section">
        <div className="container text-center">
          <div className="cta-box glass-panel fade-in-up">
            <h2 className="cta-title">Ready to turn innovative ideas into <br/> <span className="text-gradient-animated">reliable technology</span>?</h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">Let's discuss how Byterise Tech can help architecture your digital future.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
