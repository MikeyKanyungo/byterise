import { Link } from 'react-router-dom';
import { Monitor, Server, Workflow, ScanText, Lightbulb, ArrowRight, Settings } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="service-icon text-primary" />,
      title: 'Custom Software Development',
      desc: 'Tailor-made software solutions designed precisely for your business operations and scalable for future demands.'
    },
    {
      icon: <Server className="service-icon text-secondary" />,
      title: 'Web Application Development',
      desc: 'High-performance, responsive web applications built with modern frameworks and robust backend architectures.'
    },
    {
      icon: <Workflow className="service-icon text-accent" />,
      title: 'Business Process Automation',
      desc: 'Digitizing and automating manual workflows to reduce human error, cut friction, and dramatically improve ROI.'
    },
    {
      icon: <Settings className="service-icon text-primary" />,
      title: 'System Integration',
      desc: 'Connecting disparate legacy systems, APIs, and microservices into a unified, synchronized software ecosystem.'
    },
    {
      icon: <ScanText className="service-icon text-secondary" />,
      title: 'AI & OCR Solutions',
      desc: 'Deploying optical character recognition and AI models to intelligently read documents, verify IDs, and extract data rapidly.'
    },
    {
      icon: <Lightbulb className="service-icon text-accent" />,
      title: 'Technology Consulting',
      desc: 'Expert architectural guidance and strategic roadmapping to ensure your technology stack aligns perfectly with your business goals.'
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Services & Capabilities</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive engineering services tailored to digitize, automate, and scale modern enterprises.
          </p>
        </div>
      </section>

      <section className="services-grid-section section container">
        <div className="custom-service-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card glass-panel fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="icon-wrapper">
                {svc.icon}
              </div>
              <h3>{svc.title}</h3>
              <p className="text-muted">{svc.desc}</p>
              <div className="card-footer-action">
                <Link to="/contact" className="text-primary hover-link">
                  Discuss this service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Service CTA */}
      <section className="service-cta section">
        <div className="container text-center">
          <div className="cta-box glass-panel">
            <h2>Need a <span className="text-gradient">Custom Solution?</span></h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? Our engineering team thrives on unique challenges.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Pitch Us Your Problem <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
