import { useEffect, useRef } from 'react';

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canvasWidth = 0;
    let canvasHeight = 0;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      canvasWidth = width;
      canvasHeight = height;
    };

    resizeCanvas();

    const stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number; type: 'circle' | 'cross' }[] = [];
    const starCount = 500;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        radius: Math.random() * 2.5 + 0.3,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        type: Math.random() > 0.7 ? 'cross' : 'circle'
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity >= 1 || star.opacity <= 0.1) {
          star.twinkleSpeed *= -1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;

        if (star.type === 'circle') {
          // Round stars
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
          
          // Add a subtle glow effect for brighter stars
          if (star.opacity > 0.7 && star.radius > 1.5) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.2})`;
            ctx.fill();
          }
        } else {
          // Cross/sparkle stars
          const size = star.radius * 1.5;
          ctx.beginPath();
          // Vertical line
          ctx.moveTo(star.x, star.y - size);
          ctx.lineTo(star.x, star.y + size);
          // Horizontal line
          ctx.moveTo(star.x - size, star.y);
          ctx.lineTo(star.x + size, star.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.lineWidth = star.radius * 0.4;
          ctx.stroke();
          
          // Add diagonal lines for brighter stars
          if (star.opacity > 0.6) {
            ctx.beginPath();
            ctx.moveTo(star.x - size * 0.7, star.y - size * 0.7);
            ctx.lineTo(star.x + size * 0.7, star.y + size * 0.7);
            ctx.moveTo(star.x + size * 0.7, star.y - size * 0.7);
            ctx.lineTo(star.x - size * 0.7, star.y + size * 0.7);
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.6})`;
            ctx.lineWidth = star.radius * 0.3;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
}
