import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

type Category = 'Backend' | 'Frontend' | 'Databases' | 'Tools';

interface Skill {
  name: string;
  color: string;
}

const SKILLS: Record<Category, Skill[]> = {
  Backend: [
    { name: 'Node.js',       color: '#339933' },
    { name: 'Express.js',    color: '#ffffff' },
    { name: 'Python',        color: '#3776ab' },
    { name: 'REST API Design',color: '#00d4ff' },
    { name: 'TypeScript',    color: '#3178c6' },
    { name: 'JavaScript ES6+',color: '#f7df1e' },
    { name: 'MVC Architecture',color: '#8b5cf6' },
    { name: 'PHP',           color: '#777bb4' },
    { name: 'C#',            color: '#239120' },
    { name: 'OOP Principles',color: '#ff006e' },
  ],
  Frontend: [
    { name: 'React',         color: '#61dafb' },
    { name: 'Next.js',       color: '#ffffff' },
    { name: 'Tailwind CSS',  color: '#38bdf8' },
    { name: 'HTML5',         color: '#e34f26' },
    { name: 'CSS3',          color: '#1572b6' },
    { name: 'TypeScript',    color: '#3178c6' },
    { name: 'JavaScript',    color: '#f7df1e' },
  ],
  Databases: [
    { name: 'PostgreSQL',    color: '#336791' },
    { name: 'MySQL',         color: '#4479a1' },
    { name: 'MongoDB',       color: '#47a248' },
    { name: 'SQL Queries',   color: '#00d4ff' },
    { name: 'Schema Design', color: '#8b5cf6' },
    { name: 'CRUD Operations',color: '#00ff94' },
  ],
  Tools: [
    { name: 'Git & GitHub',  color: '#f05032' },
    { name: 'Postman',       color: '#ff6c37' },
    { name: 'Vitest',        color: '#6e9f18' },
    { name: 'Docker',        color: '#2496ed' },
    { name: 'Linux',         color: '#fcc624' },
    { name: 'Jira',          color: '#0052cc' },
    { name: 'Agile / Scrum', color: '#00d4ff' },
    { name: 'Trello',        color: '#0052cc' },
  ],
};

const TABS: Category[] = ['Backend', 'Frontend', 'Databases', 'Tools'];

export default function Skills() {
  const [active, setActive] = useState<Category>('Backend');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <p className="section-label reveal" style={isVisible ? { opacity: 1, transform: 'none' } : {}}>
          Tech Stack
        </p>
        <h2 className="section-title reveal" style={isVisible ? { opacity: 1, transform: 'none', transitionDelay: '0.1s' } : {}}>
          Tools I work with
        </h2>
        <p className="section-subtitle reveal" style={isVisible ? { opacity: 1, transform: 'none', transitionDelay: '0.2s' } : {}}>
          Technologies I've used in real internships, projects, and production systems.
        </p>

        {/* Tab bar */}
        <div className={`skills__tabs reveal ${isVisible ? 'visible' : ''}`} style={isVisible ? { opacity: 1, transform: 'none', transitionDelay: '0.3s' } : {}}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`skills__tab ${active === tab ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className={`skills__grid ${isVisible ? 'skills__grid--visible' : ''}`} key={active}>
          {SKILLS[active].map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ '--skill-color': skill.color, animationDelay: `${i * 0.05}s` } as React.CSSProperties}
            >
              <div className="skill-card__dot" />
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
