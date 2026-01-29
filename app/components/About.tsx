'use client';

import { motion } from 'framer-motion';

const achievements = [
  { icon: '🏆', title: 'PortXFolio Hackathon', desc: 'Organizer - 1,000+ participants' },
  { icon: '🥇', title: 'SuperHacks Winner', desc: 'Best Jury Award' },
  { icon: '🥇', title: 'Mega Hackathon', desc: 'Business Innovation Award' },
  { icon: '🥇', title: 'HackOClock', desc: 'Best Beginners Award' },
  { icon: '🥇', title: 'MindTheGap', desc: 'Built winning AI tool' },
  { icon: '🏅', title: 'SIH\'25', desc: 'Grand Finalist' }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            The <span className="text-gradient">Story</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Profile Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-profile"
          >
            <div className="about-avatar">AS</div>
            <h3 className="about-name">Aaditya Singhal</h3>
            <p className="about-role">AI & Cloud Engineer</p>
            <p className="about-bio">
              Passionate about Machine Learning, cloud technologies, and building things that matter. 
              I turn complex challenges into elegant solutions through code.
            </p>
            
            {/* Social Links */}
            <div className="about-socials">
              <a href="https://github.com/aaditya3301" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/aaditya3301" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:aadityasinghal77@gmail.com" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6L12 13L2 6"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Education */}
            <div style={{ marginBottom: '48px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🎓</span> Education
              </h4>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-date">2024 - 2028</span>
                  <h5 className="timeline-title">KIET Group of Institutions</h5>
                  <p className="timeline-subtitle">B.Tech, Computer Science • 9.49 CGPA</p>
                  <p className="timeline-description">Delhi NCR • OS, DBMS, OOPS, Cloud Computing</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🏆</span> Achievements
              </h4>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="achievement-card"
                  >
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div>
                      <p className="achievement-title">{achievement.title}</p>
                      <p className="achievement-desc">{achievement.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ marginTop: '48px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📜</span> Certifications
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'var(--bg-card)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px'
                }}>
                  <span style={{ width: '8px', height: '8px', background: '#fbbf24', borderRadius: '50%' }} />
                  AWS Cloud Practitioner (In Progress)
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'var(--bg-card)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px'
                }}>
                  <span style={{ width: '8px', height: '8px', background: '#fbbf24', borderRadius: '50%' }} />
                  Docker Essentials (In Progress)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
