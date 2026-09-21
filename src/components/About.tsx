import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const STATS = [
  { value: '2',  label: 'Internships Completed' },
  { value: '7+', label: 'Projects Shipped' },
  { value: '2',  label: 'Certifications' },
  { value: '6mo+', label: 'Mentoring Experience' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <div className={`about__grid ${isVisible ? 'visible' : ''}`}>
          {/* Avatar column */}
          <div className="about__avatar-wrap reveal">
            <div className="about__avatar">
              <div className="about__avatar-ring" />
              <div className="about__avatar-inner">
                <span>AG</span>
              </div>
              <div className="about__avatar-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                Fullstack Dev
              </div>
            </div>

            {/* Floating tech chips */}
            <div className="about__chip about__chip--1">Node.js</div>
            <div className="about__chip about__chip--2">React</div>
            <div className="about__chip about__chip--3">PostgreSQL</div>
          </div>

          {/* Text column */}
          <div className="about__text">
            <p className="section-label reveal">About me</p>
            <h2 className="section-title reveal reveal-delay-1">
              Building backends that <span className="gradient-text">power</span> great products
            </h2>

            <p className="about__bio reveal reveal-delay-2">
              I'm Anish Ghimire — a fullstack developer based in Kathmandu, Nepal, with a strong
              focus on backend engineering. I've built and integrated RESTful APIs using Node.js
              and Express, designed relational database schemas in MySQL and PostgreSQL, and shipped
              real features during active internships.
            </p>
            <p className="about__bio reveal reveal-delay-3">
              On the frontend I work with React and Next.js, and I bring both sides of the stack
              together in MERN applications. I care deeply about clean MVC architecture, secure
              authentication, and code that's maintainable at scale. Currently pursuing BIM at
              Orchid International College while growing fast on a professional backend team.
            </p>

            <div className="about__tags reveal reveal-delay-4">
              {['MVC Architecture', 'REST API Design', 'Clean Code', 'Database Design', 'Quick Learner', 'Team Player'].map((t) => (
                <span key={t} className="about__tag">{t}</span>
              ))}
            </div>

            <div className="about__stats reveal reveal-delay-5">
              {STATS.map((s) => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-value gradient-text">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
