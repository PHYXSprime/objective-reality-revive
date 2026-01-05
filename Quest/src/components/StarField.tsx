import { useEffect, useRef } from 'react';

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Generate stars
    const starCount = 150;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 2 + 2}s`;
      
      if (Math.random() > 0.7) {
        star.classList.add('star-twinkle');
      }

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="star-field"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #050510 50%, #000005 100%)'
      }}
    />
  );
}
