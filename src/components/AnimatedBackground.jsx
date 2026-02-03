import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let gridLines = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    // Configuration
    const gridSize = 40;
    const connectionDistance = 100;
    const colors = ['#10b981', '#3b82f6', '#6366f1']; // Green, Blue, Indigo

    class DataPacket {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        this.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        this.length = Math.random() * 100 + 50; // Length of the trail
        this.distanceTraveled = 0;
        this.life = Math.random() * 100 + 100;
        this.opacity = 0;
        this.fadeIn = true;
      }

      update() {
        if (this.fadeIn) {
          this.opacity += 0.05;
          if (this.opacity >= 1) {
            this.opacity = 1;
            this.fadeIn = false;
          }
        } else if (this.life < 20) {
            this.opacity -= 0.05;
        }

        if (this.direction === 'horizontal') {
          this.x += this.speed;
          if (this.x > canvas.width + this.length) this.reset();
        } else {
          this.y += this.speed;
          if (this.y > canvas.height + this.length) this.reset();
        }
        
        this.life--;
        if (this.life <= 0 || this.opacity <= 0) this.reset();
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          this.direction === 'horizontal' ? this.x - this.length : this.x,
          this.direction === 'vertical' ? this.y - this.length : this.y,
          this.x,
          this.y
        );
        
        const c = this.color;
        // Hex to rgba
        const r = parseInt(c.slice(1, 3), 16);
        const g = parseInt(c.slice(3, 5), 16);
        const b = parseInt(c.slice(5, 7), 16);

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(
          this.direction === 'horizontal' ? this.x - this.length : this.x,
          this.direction === 'vertical' ? this.y - this.length : this.y
        );
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Glowing head
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    class CircuitNode {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.active = Math.random() > 0.8; // Only some nodes are active
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!this.active) return;
        
        this.pulse += this.pulseSpeed;
        const opacity = (Math.sin(this.pulse) + 1) / 2 * 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = opacity;
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const initGrid = () => {
        gridLines = [];
        // Create nodes at intersections
        for (let x = 0; x < canvas.width; x += gridSize) {
            for (let y = 0; y < canvas.height; y += gridSize) {
                if (Math.random() > 0.9) { // Sparse nodes
                    gridLines.push(new CircuitNode(x, y));
                }
            }
        }
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = 30; // Number of data packets
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new DataPacket());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw nodes
      gridLines.forEach(node => node.draw());

      // Draw packets
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;
