'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

// Text scramble effect
const useTextScramble = (finalText: string) => {
  const [text, setText] = useState(finalText);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    let frame = 0;
    const queue: Array<{ from: string; to: string; start: number; end: number }> = [];
    
    for (let i = 0; i < finalText.length; i++) {
      const from = finalText[i];
      const to = finalText[i];
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end });
    }
    
    const update = () => {
      let output = '';
      let complete = 0;
      
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += '';
        }
      }
      
      setText(output);
      
      if (complete === queue.length) {
        return;
      }
      
      frame++;
      requestAnimationFrame(update);
    };
    
    update();
  }, [finalText]);
  
  return text;
};

export default function Hero() {
  const scrambledText = useTextScramble('intelligent');
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate orbs with GSAP
    if (orbRef1.current) {
      gsap.to(orbRef1.current, {
        x: '+=100',
        y: '+=50',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
    
    if (orbRef2.current) {
      gsap.to(orbRef2.current, {
        x: '-=80',
        y: '-=60',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div ref={orbRef1} className="hero-orb hero-orb-1" />
        <div ref={orbRef2} className="hero-orb hero-orb-2" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            Available for opportunities
          </motion.div>

          {/* Title with scramble effect */}
          <h1 className="hero-title">
            I build <span className="text-gradient">{scrambledText}</span><br />
            systems that scale
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            AI & Cloud Engineer crafting next-gen solutions with Machine Learning, 
            AWS, and cutting-edge technologies. Turning complex problems into elegant code.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/aaditya3301"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '48px',
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: '1px solid var(--border-color)'
            }}
          >
            {[
              { value: '37+', label: 'Projects' },
              { value: '6+', label: 'Hackathon Wins' },
              { value: '9.49', label: 'CGPA' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700' }} className="text-gradient">{stat.value}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)'
        }}
      >
        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
