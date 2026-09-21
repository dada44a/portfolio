import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'References', href: '#references' },
];

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/dada44a', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anishg03', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: 'Phone',    href: 'tel:+9779843990155', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  )},
];

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer" ref={ref}>
      <div className="footer__glow" />
      <div className={`container ${isVisible ? 'footer--visible' : ''}`}>
        {/* Contact section */}
        <div className={`footer__contact reveal ${isVisible ? 'visible' : ''}`}>
          <div className="footer__contact-text">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">
              Let's build something <span className="gradient-text">great</span> together
            </h2>
            <p className="footer__contact-bio">
              I'm actively looking for backend and fullstack roles where I can grow under
              senior engineers and ship real products. Whether you have a position, a project,
              or just want to connect — I'd love to hear from you.
            </p>
            <a href="mailto:aniishghimire@gmail.com" className="footer__email">
              aniishghimire@gmail.com
            </a>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__social">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Send a message</h3>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="contact-form__field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary contact-form__submit" disabled={status === 'sending' || status === 'sent'}>
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending…'}
              {status === 'sent'    && '✓ Message sent!'}
              {status === 'error'   && 'Try again'}
            </button>
            {status === 'sent' && (
              <p className="contact-form__success">Thanks! I'll get back to you within 24 hours.</p>
            )}
          </form>
        </div>

        {/* Bottom bar */}
        <div className={`footer__bottom reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <span className="footer__copy">
            © {new Date().getFullYear()} Anish Ghimire · Kathmandu, Nepal
          </span>
          <nav className="footer__nav">
            {FOOTER_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="footer__back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
