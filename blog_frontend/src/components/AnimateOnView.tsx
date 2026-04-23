import React, { useRef, useEffect, useState } from 'react';

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnView: React.FC<AnimateOnViewProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        `transition-all duration-700 ease-out will-change-transform opacity-0 translate-y-8 ` +
        (visible ? 'opacity-100 translate-y-0' : '') +
        (className ? ` ${className}` : '')
      }
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnView;
