'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null; // Don't show on mobile
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          opacity: isHidden ? 0 : 1,
        }}
      />
      {/* Cursor follower */}
      <div
        className="custom-cursor-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.8 : 1})`,
          opacity: isHidden ? 0 : 0.5,
        }}
      />
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: transform 0.15s ease, opacity 0.3s ease;
          mix-blend-mode: difference;
        }
        
        .custom-cursor-follower {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.3s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.3s ease;
        }
        
        :global(body) {
          cursor: none !important;
        }
        
        :global(a), :global(button) {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
