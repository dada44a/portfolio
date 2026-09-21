import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

interface Project {
  title:       string;
  category:    'featured' | 'internship';
  description: string;
  tags:        string[];
  gradient:    string;
  github?:     string;
  live:        string;
  featured?:   boolean;
}

const PROJECTS: Project[] = [
  {
    title:       'FireX 2.0',
    category:    'featured',
    description: 'Movie ticketing platform with concurrency-safe seat locking to prevent double bookings. Features RESTful endpoints for schedules, dynamic seating, booking histories, and a full admin panel with real-time inventory and role-based access management.',
    tags:        ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT', 'MVC'],
    gradient:    'linear-gradient(135deg, #ff006e22, #8b5cf622)',
    github:      'https://github.com/dada44a',
    live:        'https://fie-x2-0-ijmr.vercel.app/',
    featured:    true,
  },
  {
    title:       'Floe Mini',
    category:    'featured',
    description: 'Developer HTTP client tool supporting custom methods (GET/POST/PUT/DELETE), header manipulation, and auth token injection. Features asynchronous batch request execution to benchmark multiple endpoints concurrently with structured JSON response parsing.',
    tags:        ['JavaScript', 'REST APIs', 'JSON Parsing', 'Async/Await', 'ES6+'],
    gradient:    'linear-gradient(135deg, #00d4ff22, #8b5cf622)',
    github:      'https://github.com/dada44a',
    live:        'https://floeapp.vercel.app/',
  },
  {
    title:       'Mansara Books',
    category:    'featured',
    description: 'E-commerce bookstore frontend decoupled from backend API consumption (Node.js/PHP/Laravel). Structured state management, modular React components, cart logic, and clean REST architecture for seamless client–server separation.',
    tags:        ['React', 'Tailwind CSS', 'Node.js', 'PHP', 'REST API', 'State Management'],
    gradient:    'linear-gradient(135deg, #00ff9422, #00d4ff22)',
    github:      'https://github.com/dada44a',
    live:        'https://mansarastore.vercel.app/',
  },
  {
    title:       'She Guides Me',
    category:    'internship',
    description: 'Empowerment and mentoring platform connecting female travelers and adventurers with licensed guides. Developed responsive client features, seamless booking flow, and API integration during internship.',
    tags:        ['Fullstack', 'Web Application', 'REST Integration', 'UI/UX', 'Team Git Workflow'],
    gradient:    'linear-gradient(135deg, #ff006e22, #00d4ff22)',
    live:        'https://sheguidesme.com/',
  },
  {
    title:       'Kathmandu Business Campus',
    category:    'internship',
    description: 'Official academic portal for Kathmandu Business Campus. Built institutional content architecture, academic programs showcase, dynamic admissions portal, and contact communication channels.',
    tags:        ['Web Portal', 'Institutional CMS', 'Responsive Web', 'PHP/Backend', 'Performance'],
    gradient:    'linear-gradient(135deg, #8b5cf622, #fbbf2422)',
    live:        'https://kathmandubusinesscampus.edu.np/',
  },
  {
    title:       'HIDR Nepal',
    category:    'internship',
    description: 'Official portal for the Health, Infrastructure & Development Research (HIDR) initiative in Nepal. Implemented publication archives, research project showcases, and team directory with optimized page delivery.',
    tags:        ['Enterprise Web', 'Research Portal', 'Dynamic Data', 'SEO Optimized', 'Accessibility'],
    gradient:    'linear-gradient(135deg, #00d4ff22, #00ff9422)',
    live:        'https://hidr.com.np/',
  },
  {
    title:       'Best of Nepal Shilajit',
    category:    'internship',
    description: 'E-commerce web store presenting authentic Himalayan Shilajit products. Implemented high-converting product pages, interactive shopping cart, order placement flow, and responsive mobile-first checkout UI.',
    tags:        ['E-Commerce', 'Product Showcase', 'Cart System', 'Next.js/React', 'Vercel Deployment'],
    gradient:    'linear-gradient(135deg, #fbbf2422, #ff006e22)',
    live:        'https://best-of-nepal-1j1n.vercel.app/',
  },
];

type Filter = 'all' | 'internship' | 'featured';

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [filter, setFilter] = useState<Filter>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${isVisible ? 'visible' : ''}`}>Portfolio Work</p>
        <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          Things I've <span className="gradient-text">built</span>
        </h2>
        <p className={`section-subtitle reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          Production systems, client solutions from internships, and developer tools.
        </p>

        {/* Filter buttons */}
        <div className={`projects__filters reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <button
            className={`projects__filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work ({PROJECTS.length})
          </button>
          <button
            className={`projects__filter-btn ${filter === 'internship' ? 'active' : ''}`}
            onClick={() => setFilter('internship')}
          >
            Internship Client Projects (4)
          </button>
          <button
            className={`projects__filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Core &amp; Fullstack Apps (3)
          </button>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((p, i) => (
            <article
              key={p.title}
              className={`project-card reveal ${isVisible ? 'visible' : ''} ${p.featured ? 'project-card--featured' : ''}`}
              style={{ transitionDelay: `${0.1 + (i % 6) * 0.08}s` }}
            >
              {/* Card header / preview area */}
              <div className="project-card__preview" style={{ background: p.gradient }}>
                {p.featured && <span className="project-card__featured-badge">⭐ Featured</span>}
                {p.category === 'internship' && <span className="project-card__internship-badge">💼 Internship</span>}
                <div className="project-card__window-dots">
                  <span /><span /><span />
                </div>
                <div className="project-card__preview-inner">
                  <span className="project-card__preview-title">{p.title}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>

                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                      <GitHubIcon /> Code
                    </a>
                  )}
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--primary">
                    Live Demo <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
