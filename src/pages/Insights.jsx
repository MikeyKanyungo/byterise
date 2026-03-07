import { ArrowUpRight } from 'lucide-react';
import './Insights.css';

const Insights = () => {
  const articles = [
    {
      category: 'AI / OCR Systems',
      title: 'The Future of KYC: How Deep Learning is Defeating Deepfakes',
      excerpt: 'Explore how advanced neural networks and liveness detection algorithms are securing financial onboarding against sophisticated spoofing attacks.',
      date: 'Oct 24, 2025'
    },
    {
      category: 'Software Engineering',
      title: 'Architecting Multi-Tenant Applications for Scale',
      excerpt: 'A deep dive into the engineering principles behind our Enterprise Loan Management System, covering data isolation and routing strategies.',
      date: 'Oct 12, 2025'
    },
    {
      category: 'Digital Transformation',
      title: 'Why Legacy System Integration is the Biggest Hurdle for Enterprises',
      excerpt: 'Learn strategies for seamless API modernization and how to bridge legacy mainframes with cloud-native applications safely.',
      date: 'Sep 30, 2025'
    },
    {
      category: 'Technology Trends',
      title: 'Predictive Analytics in Logistics and Fleet Management',
      excerpt: 'How real-time GPS telemetry and ML models can accurately predict vehicle maintenance needs before fatal breakdowns occur.',
      date: 'Sep 15, 2025'
    }
  ];

  return (
    <div className="insights-page">
      <section className="page-header section text-center">
        <div className="container">
          <h1 className="text-gradient fade-in-up">Insights & Engineering Blog</h1>
          <p className="text-muted max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Thoughts, technical deep dives, and industry perspectives from the Byterise engineering team.
          </p>
        </div>
      </section>

      <section className="articles-grid section container">
        <div className="blog-grid">
          {articles.map((article, idx) => (
            <article key={idx} className="blog-card glass-panel fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-excerpt text-muted">{article.excerpt}</p>
                <div className="blog-action">
                  <a href="#" className="read-more">Read Article <ArrowUpRight size={18} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Insights;
