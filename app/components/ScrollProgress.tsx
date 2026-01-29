'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--border-color)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          background: 'var(--gradient-1)',
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px var(--accent-glow)',
        }}
      />
    </div>
  );
}
