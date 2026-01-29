'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/icon.png" 
              alt="Logo"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
              }}
            />
            <span style={{ fontWeight: '600', fontSize: '18px' }}>Aaditya</span>
          </a>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn btn-primary" style={{ marginLeft: '8px', padding: '10px 20px', fontSize: '14px' }}>
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
