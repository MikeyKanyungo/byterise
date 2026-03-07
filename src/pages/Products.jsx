import { CheckCircle2, ArrowRight } from 'lucide-react';
import './Products.css';

const Products = () => {
  const productsList = [
    {
      id: 'kyc',
      name: 'KYC / ID Verification Platform',
      tagline: 'Authenticate with confidence.',
      overview: 'An advanced OCR + facial verification system designed to streamline identity authentication and prevent fraud in real-time.',
      features: ['Facial Liveness Detection', 'Automated ID Document OCR', 'Sanctions & Watchlist Screening', 'Military-Grade Encryption'],
      usecases: ['Banking Onboarding', 'Crypto Exchanges', 'Telecom SIM Registration'],
      colorClass: 'product-primary'
    },
    {
      id: 'elms',
      name: 'Enterprise Loan Management System',
      tagline: 'End-to-end loan orchestration.',
      overview: 'A robust, multi-tenant platform empowering financial institutions to manage the entire loan lifecycle from origination to collections.',
      features: ['Credit Scoring Engine Integration', 'Automated Amortization Schedules', 'Multi-tenant Architecture', 'Real-time Analytics Dashboard'],
      usecases: ['Microfinance Institutions', 'Commercial Banks', 'Peer-to-Peer Lenders'],
      colorClass: 'product-secondary'
    },
    {
      id: 'vts',
      name: 'Vehicle Tracking Platform',
      tagline: 'Visibility across your entire fleet.',
      overview: 'A comprehensive GPS tracking and fleet management system optimizing logistics, enhancing security, and reducing operational costs.',
      features: ['Real-time Geofencing', 'Fuel Usage Analytics', 'Driver Behavior Monitoring', 'Maintenance Alerts'],
      usecases: ['Logistics Companies', 'Public Transportation', 'Delivery Services'],
      colorClass: 'product-accent'
    },
    {
      id: 'sms',
      name: 'School Fee Management System',
      tagline: 'Simplifying institutional finance.',
      overview: 'A digital payment tracking and reporting module designed for schools to automate fee collection, reconciliation, and parent notifications.',
      features: ['Automated Invoicing & Receipts', 'Multi-gateway Payment Integration', 'Defaulter Tracking & Alerts', 'Custom Financial Reporting'],
      usecases: ['Universities', 'K-12 Schools', 'Vocational Institutes'],
      colorClass: 'product-primary'
    },
    {
      id: 'baw',
      name: 'Book-A-Wash Platform',
      tagline: 'Service booking modernized.',
      overview: 'An automated service booking system that connects customers with service providers seamlessly, featuring scheduling and digital payments.',
      features: ['Dynamic Slot Availability', 'Provider Dispatch Management', 'In-app Communication', 'Customer Loyalty Engine'],
      usecases: ['Car Wash Networks', 'Home Cleaning Services', 'Mobile Auto Detailing'],
      colorClass: 'product-secondary'
    }
  ];

  return (
    <div className="products-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Our Product Ecosystem</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Enterprise-ready platforms built to solve complex operational challenges out of the box.
          </p>
        </div>
      </section>

      <section className="products-list section container">
        <div className="products-wrapper">
          {productsList.map((product, idx) => (
            <div key={product.id} className={`product-showcase glass-panel fade-in-up ${product.colorClass}`} style={{ animationDelay: '0.1s' }}>
              <div className="product-info">
                <h2>{product.name}</h2>
                <span className="product-tagline text-gradient">{product.tagline}</span>
                <p className="product-overview">{product.overview}</p>
                
                <div className="product-details-grid">
                  <div className="detail-col">
                    <h4>Key Features</h4>
                    <ul className="check-list">
                      {product.features.map((feature, fidx) => (
                        <li key={fidx}><CheckCircle2 size={16} className="text-primary"/> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-col">
                    <h4>Primary Use Cases</h4>
                    <ul className="check-list">
                      {product.usecases.map((usecase, uidx) => (
                        <li key={uidx}><ArrowRight size={16} className="text-secondary"/> {usecase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="product-action">
                  <button className="btn btn-primary">Request Demo</button>
                </div>
              </div>
              
              <div className="product-visual">
                <div className="mockup-window glass-panel">
                  <div className="mockup-toolbar">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-skeleton-header"></div>
                    <div className="mockup-skeleton-body">
                      <div className="skeleton-sidebar"></div>
                      <div className="skeleton-main">
                        <div className="skeleton-card"></div>
                        <div className="skeleton-card"></div>
                        <div className="skeleton-card"></div>
                        <div className="skeleton-graph"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
