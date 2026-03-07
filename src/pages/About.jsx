import { Target, Eye, Zap, Shield, Cpu, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">About Byterise Tech</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            We are the architects of your digital future, engineering smarter solutions for complex problems.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section container">
        <div className="mv-grid">
          <div className="mv-card glass-panel fade-in-up">
            <Target className="text-primary mb-4" size={48} />
            <h2>Our <span className="text-gradient">Mission</span></h2>
            <p className="text-muted">
              To turn innovative ideas into reliable technology businesses can depend on. We strive to simplify complex operations through secure platforms, intelligent automation, and custom software.
            </p>
          </div>
          <div className="mv-card glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Eye className="text-secondary mb-4" size={48} />
            <h2>Our <span className="text-gradient">Vision</span></h2>
            <p className="text-muted">
              To become the leading catalyst for enterprise digital transformation globally, recognized for engineering excellence, scalable architectures, and impactful, future-ready solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Focus */}
      <section className="core-focus section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our <span className="text-gradient">Core Focus</span></h2>
            <p className="text-muted">Where our expertise meets your business needs.</p>
          </div>
          <div className="focus-grid">
            <div className="focus-item glass-panel fade-in-up">
              <Zap className="focus-icon text-accent" />
              <h3>Automation</h3>
              <p className="text-muted">Streamlining workflows and eliminating manual redundancies to boost operational speed and reliability.</p>
            </div>
            <div className="focus-item glass-panel fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Cpu className="focus-icon text-primary" />
              <h3>AI & Intelligence</h3>
              <p className="text-muted">Leveraging cognitive technologies and OCR to extract insights and build adaptive, self-learning systems.</p>
            </div>
            <div className="focus-item glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Shield className="focus-icon text-secondary" />
              <h3>Enterprise Systems</h3>
              <p className="text-muted">Designing scalable, secure, and multi-tenant platforms capable of supporting massive organizational growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="differentiator section">
        <div className="container diff-container glass-panel">
          <div className="diff-content">
            <h2>What Makes Byterise <br/><span className="text-gradient">Different?</span></h2>
            <ul className="diff-list">
              <li>
                <strong>Engineering-First Approach</strong>
                <p className="text-muted">We don't just write code; we architect systems meant to scale, endure, and perform under pressure.</p>
              </li>
              <li>
                <strong>Deep Domain Expertise</strong>
                <p className="text-muted">Our experience spans fintech, logistics, education, and beyond—allowing us to solve industry-specific challenges.</p>
              </li>
              <li>
                <strong>Security by Design</strong>
                <p className="text-muted">From identity verification protocols to encrypted data pipelines, security is built into our foundation, not added as an afterthought.</p>
              </li>
            </ul>
          </div>
          <div className="diff-visual">
            <Users className="large-bg-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
