import { useEffect, useState } from 'react';

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
}
