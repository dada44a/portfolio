import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './References.css';

interface Reference {
  name:    string;
  title:   string;
  company: string;
  initials:string;
  phone?:  string;
  email?:  string;
  note?:   string;
  color:   string;
}

const REFERENCES: Reference[] = [
  {
    name:    'Prasnna Chudal',
    title:   'Founder',
    company: 'Mindrisers Institute of Technology',
    initials:'PC',
    phone:   '9823721737',
    note:    'Oversees curriculum & organizational initiatives at Mindrisers.',
    color:   'var(--blue)',
  },
  {
    name:    'Nitesh Dhimal',
    title:   'Senior Developer',
    company: 'Mindrisers Technology',
    initials:'ND',
    phone:   '+977 9808300668',
    email:   'niteshonline8@gmail.com',
    note:    'Technical lead & senior engineering mentor during MERN internship.',
    color:   'var(--purple)',
  },
  {
    name:    'Pritha Thapa',
    title:   'Project Manager',
    company: 'Mindrisers Institute of Technology',
    initials:'PT',
    note:    'Sprint coordination, Agile workflows & project deliverables oversight.',
    color:   'var(--pink)',
  },
  {
    name:    'Dhiraj Kumar Jha',
    title:   'Department Head',
    company: 'Orchid International College',
    initials:'DJ',
    note:    'Head of Department for Bachelor in Information Management (BIM).',
    color:   'var(--green)',
  },
];

export default function References() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="references" className="references section" ref={ref}>
      <div className="container">
        <p className={`section-label reveal ${isVisible ? 'visible' : ''}`}>Professional Network</p>
        <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          Professional <span className="gradient-text">References</span>
        </h2>
        <p className={`section-subtitle reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          Supervisors, mentors, and academic leaders available for professional recommendation.
        </p>

        <div className="references__grid">
          {REFERENCES.map((r, i) => (
            <div
              key={r.name}
              className={`ref-card glass-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s`, '--ref-color': r.color } as React.CSSProperties}
            >
              <div className="ref-card__header">
                <div className="ref-card__avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <h3 className="ref-card__name">{r.name}</h3>
                  <p className="ref-card__title">{r.title}</p>
                  <p className="ref-card__company">{r.company}</p>
                </div>
              </div>

              {r.note && <p className="ref-card__note">{r.note}</p>}

              {(r.phone || r.email) && (
                <div className="ref-card__contact">
                  {r.phone && (
                    <a href={`tel:${r.phone.replace(/\s+/g, '')}`} className="ref-card__contact-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      {r.phone}
                    </a>
                  )}
                  {r.email && (
                    <a href={`mailto:${r.email}`} className="ref-card__contact-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                      {r.email}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
