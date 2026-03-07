import { Building2, Truck, GraduationCap, Building } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      id: 'finance',
      icon: <Building2 className="solution-icon" />,
      title: 'Financial Institutions',
      challenges: ['High customer abandonment during onboarding', 'Fraud and identity theft', 'Manual loan processing bottlenecks'],
      solutions: ['Automated eKYC with liveness checks', 'Enterprise Loan Management Systems', 'AI-driven credit scoring pipelines'],
      results: '+40% Onboarding Speed, -60% Processing Costs',
      bgClass: 'bg-primary-tint'
    },
    {
      id: 'logistics',
      icon: <Truck className="solution-icon" />,
      title: 'Transport & Logistics',
      challenges: ['Zero visibility on active fleets', 'Fuel theft and unauthorized usage', 'Delayed maintenance schedules'],
      solutions: ['Real-time GPS tracking & geo-fencing', 'IoT integration for fuel monitoring', 'Automated dispatching systems'],
      results: '99% Fleet Visibility, 25% Reduction in Fuel Costs',
      bgClass: 'bg-secondary-tint'
    },
    {
      id: 'education',
      icon: <GraduationCap className="solution-icon" />,
      title: 'Schools & Institutions',
      challenges: ['Complex fee reconciliation', 'Lack of transparent parent communication', 'Administrative overload'],
      solutions: ['Unified Fee Management Portals', 'Automated multi-channel notifications', 'Digital record management'],
      results: 'Zero Reconciliation Errors, +80% Collection Speed',
      bgClass: 'bg-accent-tint'
    },
    {
      id: 'sme',
      icon: <Building className="solution-icon" />,
      title: 'SMEs & Startups',
      challenges: ['Scaling manual operations', 'Lack of integrated systems', 'High barrier to digital transformation'],
      solutions: ['Custom automation frameworks', 'Lean web application development', 'API & systems integration'],
      results: 'Accelerated Time-to-Market, 10x Operational Scale',
      bgClass: 'bg-glass-tint'
    }
  ];

  return (
    <div className="solutions-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Industry Solutions</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            We understand the unique complexities of your sector. See how our technology solves real business problems.
          </p>
        </div>
      </section>

      <section className="solutions-content section container">
        <div className="solutions-grid">
          {solutions.map((sol, idx) => (
            <div key={sol.id} className={`solution-block glass-panel fade-in-up ${sol.bgClass}`} style={{ animationDelay: `${0.1 * idx}s` }}>
              <div className="solution-header">
                <div className="icon-container">{sol.icon}</div>
                <h2>{sol.title}</h2>
              </div>
              
              <div className="solution-body">
                <div className="problem-solution-area">
                  <div className="ps-box problem">
                    <h4>The Challenge</h4>
                    <ul>
                      {sol.challenges.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                  <div className="ps-box solution">
                    <h4>Our Solution</h4>
                    <ul>
                      {sol.solutions.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="solution-results glass-panel">
                  <div className="result-label">Impact</div>
                  <div className="result-value text-gradient">{sol.results}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
