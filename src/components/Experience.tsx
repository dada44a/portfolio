import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

interface Job {
  role:     string;
  company:  string;
  period:   string;
  location: string;
  type:     string;
  color:    string;
  bullets:  string[];
}

const JOBS: Job[] = [
  {
    role:     'Full Stack / MERN Intern',
    company:  'Mindrisers Institute of Technology',
    period:   'Aug 2026 — Present',
    location: 'Putalisadak, Kathmandu',
    type:     'Internship',
    color:    'var(--blue)',
    bullets:  [
      'Built and maintained RESTful backend APIs and database schemas in Node.js/Express, keeping clean MVC separation and optimizing query performance on MySQL/PostgreSQL.',
      'Implemented secure authentication, role-based access control, and token validation across backend endpoints.',
      'Collaborated with senior developers using Git workflows, including code refactoring, database migrations, and systematic API debugging.',
    ],
  },
  {
    role:     'Software Engineering Intern',
    company:  'Kalash Services Pvt. Ltd',
    period:   'Jul 2026 — Aug 2026',
    location: 'Jawalakhel, Lalitpur',
    type:     'Internship',
    color:    'var(--purple)',
    bullets:  [
      'Wrote modular backend logic and relational database queries as part of full-stack feature development.',
      'Performed backend testing and endpoint debugging with Postman, resolving data-flow bottlenecks across the SDLC.',
      'Translated business requirements into functional application modules following OOP standards and clean code conventions.',
    ],
  },
  {
    role:     'Web Development Mentor',
    company:  'Freelance',
    period:   'Sept 2025 — Feb 2026',
    location: 'Kathmandu, Nepal',
    type:     'Contract',
    color:    'var(--green)',
    bullets:  [
      'Mentored junior developers on backend fundamentals, OOP concepts, database modeling, and client-server communication.',
      'Led code reviews focused on clean architecture, input validation, defensive programming, and REST API standards.',
      'Guided learners in diagnosing runtime bugs and implementing scalable database relations.',
    ],
  },
];

const EDUCATION = [
  {
    degree:   'Bachelor in Information Management (BIM)',
    school:   'Orchid International College',
    period:   '2022 — Present',
    location: 'Kathmandu, Nepal',
    note:     'OOP, DBMS, Web Technology, Data Structures & Algorithms, Software Engineering',
    color:    'var(--amber)',
  },
  {
    degree:   'MERN Stack Program',
    school:   'Mindrisers Institute of Technology',
    period:   'Feb 2026 — May 2026',
    location: 'Kathmandu, Nepal',
    note:     'Certified MERN Stack Developer',
    color:    'var(--pink)',
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${isVisible ? 'visible' : ''}`}>Career</p>
        <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className={`section-subtitle reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          Internships and freelance work building real products in Nepal's tech scene.
        </p>

        <div className="timeline">
          <div className={`timeline__line ${isVisible ? 'timeline__line--visible' : ''}`} />

          {JOBS.map((job, i) => (
            <div
              key={job.company + job.period}
              className={`timeline__item reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="timeline__node" style={{ '--node-color': job.color } as React.CSSProperties} />
              <div className="timeline__card glass-card">
                <div className="timeline__card-header">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <div className="timeline__company" style={{ color: job.color }}>{job.company}</div>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{job.period}</span>
                    <span className="timeline__location">{job.location}</span>
                    <span className="timeline__type">{job.type}</span>
                  </div>
                </div>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <span className="timeline__bullet-dot" style={{ background: job.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education subsection */}
        <div className={`exp__edu-title reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.55s' }}>
          <p className="section-label" style={{ marginTop: '72px' }}>Education & Certifications</p>
        </div>

        <div className="edu__grid">
          {EDUCATION.map((e, i) => (
            <div
              key={e.school}
              className={`edu-card glass-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ '--node-color': e.color, transitionDelay: `${0.65 + i * 0.12}s` } as React.CSSProperties}
            >
              <div className="edu-card__accent" style={{ background: e.color }} />
              <div className="edu-card__body">
                <h4 className="edu-card__degree">{e.degree}</h4>
                <div className="edu-card__school" style={{ color: e.color }}>{e.school}</div>
                <div className="edu-card__meta">
                  <span>{e.period}</span>
                  <span>·</span>
                  <span>{e.location}</span>
                </div>
                {e.note && <p className="edu-card__note">{e.note}</p>}
              </div>
            </div>
          ))}

          {/* Certs card */}
          <div
            className={`edu-card glass-card reveal ${isVisible ? 'visible' : ''}`}
            style={{ '--node-color': 'var(--blue)', transitionDelay: '0.89s' } as React.CSSProperties}
          >
            <div className="edu-card__accent" style={{ background: 'var(--blue)' }} />
            <div className="edu-card__body">
              <h4 className="edu-card__degree">Certifications</h4>
              <ul className="edu-card__certs">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--blue)" style={{flexShrink:0}}><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                  HackerRank Node.js &amp; Problem Solving — Apr 2026
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--blue)" style={{flexShrink:0}}><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                  MERN Stack, Mindrisers Institute — May 2026
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
