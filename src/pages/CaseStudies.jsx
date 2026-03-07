import { ArrowRight, BarChart } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => {
  const studies = [
    {
      client: 'Global Logistics Corp',
      sector: 'Transportation',
      title: 'Scaling Fleet Operations with Real-Time Tracking',
      problem: 'The client struggled with tracking over 5,000 vehicles, leading to increased fuel theft and delayed deliveries.',
      solution: 'We engineered a highly concurrent GPS ingestion pipeline capable of tracking massive event streams with millisecond latency, coupled with a predictive maintenance dashboard.',
      results: [
        '99.99% System Uptime',
        '28% Reduction in fuel shrink',
        'Fully automated dispatch routing'
      ]
    },
    {
      client: 'FinBank Africa',
      sector: 'Financial Services',
      title: 'Automating the Enterprise Loan Lifecycle',
      problem: 'Loan origination was largely manual, taking up to 14 days per applicant with a high error rate in risk assessment.',
      solution: 'Deployed a custom version of our Enterprise Loan Management System, integrating directly with national identity databases and implementing an AI scoring model.',
      results: [
        'Origination dropped from 14 days to 4 hours',
        '-45% default rate through better risk models',
        '10x increase in loan volume'
      ]
    },
    {
      client: 'EduTech Academy',
      sector: 'Education',
      title: 'Digital Fee Reconciliation System',
      problem: 'Administrative staff spent hundreds of hours manually matching bank deposits to student accounts.',
      solution: 'Integrated a multi-tenant school fee portal bridging their legacy SIS with modern digital payment gateways via APIs.',
      results: [
        'Zero manual reconciliation needed',
        'Real-time parent notifications',
        '+92% fee collection efficiency'
      ]
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Case Studies</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore how we've helped leading organizations transform their operations and accelerate growth.
          </p>
        </div>
      </section>

      <section className="studies-list section container">
        <div className="studies-wrapper">
          {studies.map((study, idx) => (
            <div key={idx} className="study-card glass-panel fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="study-meta">
                <span className="study-sector">{study.sector}</span>
                <span className="study-client">{study.client}</span>
              </div>
              <h2 className="study-title text-gradient">{study.title}</h2>
              
              <div className="study-details">
                <div className="study-col">
                  <h4>The Problem</h4>
                  <p className="text-muted">{study.problem}</p>
                </div>
                <div className="study-col">
                  <h4>The Solution</h4>
                  <p className="text-muted">{study.solution}</p>
                </div>
              </div>
              
              <div className="study-results">
                <h4><BarChart size={20} className="text-primary"/> Key Results</h4>
                <ul>
                  {study.results.map((res, i) => (
                    <li key={i}><ArrowRight size={16} className="text-accent" /> {res}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
