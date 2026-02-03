
import React from 'react';

const RainEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-30">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white w-[1px] h-[50px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}%`,
            animation: `fall ${0.5 + Math.random() * 0.5}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default RainEffect;
