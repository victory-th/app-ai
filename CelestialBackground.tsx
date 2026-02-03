
import React, { useState, useEffect, useMemo } from 'react';

const CelestialBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position to -1 to 1 range
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pre-generate star data to avoid re-calculating random values on every render
  const starLayers = useMemo(() => {
    const layers = [
      { count: 100, speedMult: 5, size: [0.5, 1], opacity: [0.1, 0.3], blur: 0 },   // Deep Background
      { count: 50, speedMult: 15, size: [1, 2], opacity: [0.3, 0.5], blur: 0 },    // Mid Ground
      { count: 20, speedMult: 35, size: [2, 3], opacity: [0.5, 0.8], blur: 1 },    // Near Foreground
    ];

    return layers.flatMap((layer, layerIdx) => 
      [...Array(layer.count)].map((_, i) => ({
        id: `star-${layerIdx}-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
        opacity: layer.opacity[0] + Math.random() * (layer.opacity[1] - layer.opacity[0]),
        delay: Math.random() * 10,
        duration: 3 + Math.random() * 5,
        parallax: layer.speedMult,
        glow: layerIdx === 2 && Math.random() > 0.7,
        blur: layer.blur
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0c]">
      {/* Background Nebula Gradients */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] opacity-20 blur-[150px] bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-nebula-pulse transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) rotate(${mousePos.x * 2}deg)`
        }}
      />
      
      {/* Dynamic Interaction Glow (Mouse Follower) */}
      <div 
        className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen transition-all duration-[1500ms] ease-out"
        style={{
          left: `calc(50% + ${mousePos.x * 40}%)`,
          top: `calc(50% + ${mousePos.y * 40}%)`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Parallax Star Field */}
      {starLayers.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle transition-transform duration-[800ms] ease-out"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            filter: star.blur ? `blur(${star.blur}px)` : 'none',
            boxShadow: star.glow ? `0 0 8px 2px rgba(255, 255, 255, 0.4)` : 'none',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            transform: `translate(${mousePos.x * star.parallax}px, ${mousePos.y * star.parallax}px)`
          }}
        />
      ))}

      {/* Distant Floating Particles (Space Dust) */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full bg-blue-400/5 blur-[80px] animate-float-slow transition-transform duration-[3000ms] ease-out"
          style={{
            width: `${300 + Math.random() * 400}px`,
            height: `${300 + Math.random() * 400}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`
          }}
        />
      ))}

      <style>{`
        @keyframes nebula-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.25; transform: scale(1.05) translate(1%, -1%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-nebula-pulse { animation: nebula-pulse 20s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle linear infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default CelestialBackground;
