import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<Props> = ({ href, children }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const targetPos = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTime: number | null = null;

    function animation(currentTime: number ) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPos, distance, 500);
      window.scrollTo(0, run);
      if (timeElapsed < 500) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
