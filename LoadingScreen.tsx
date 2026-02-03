
import React from 'react';
import CelestialBackground from './CelestialBackground';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  const isFinished = progress >= 100;

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0c] overflow-hidden">
      <CelestialBackground />
      
      {/* Central Flash Effect */}
      <div className={`absolute w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[250px] transition-all duration-1000 ${isFinished ? 'scale-[5] opacity-30' : 'scale-1 opacity-5'}`} />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-12 animate-float">
           <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-white to-yellow-800 shadow-[0_0_30px_rgba(234,179,8,0.4)] ring-1 ring-white/20">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                 <img 
                    src="https://i.ibb.co/sJzTBQTm/logo-game.png" 
                    className="w-full h-full object-cover"
                    alt="Loading"
                 />
              </div>
           </div>
        </div>

        {/* Header with Light Beam */}
        <div className="relative mb-14">
           {/* THE LIGHT BEAM STREAK */}
           <div className="absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[100px] pointer-events-none z-0 overflow-visible flex items-center justify-center">
              {/* Soft Halo */}
              <div className="absolute inset-0 bg-cyan-600/15 blur-[50px] animate-beam-pulse" />
              {/* Light Saber Core Line */}
              <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 via-white via-cyan-300 to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]" />
           </div>

           <div className="relative z-10 flex flex-col items-center">
              <h1 className="text-[48px] md:text-[64px] font-black font-fantasy text-white leading-[0.9] tracking-tight uppercase">
                VICTORY
              </h1>
              <h1 className="text-[40px] md:text-[54px] font-black font-fantasy text-gray-400 leading-[0.9] tracking-[0.1em] uppercase">
                GAME
              </h1>
           </div>
        </div>

        {/* Status Text */}
        <div className="mb-14">
          <div className="text-cyan-400 font-futuristic text-[11px] md:text-[14px] tracking-[0.4em] animate-status-glow uppercase">
            {isFinished ? 'READY FOR BATTLE' : 'PREPARING ADVENTURE'}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col items-center w-full max-w-[260px]">
          <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-5">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-cyan-300 to-white transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[12px] font-black font-futuristic text-white/30 tracking-[0.4em]">
             {Math.floor(progress)}%
          </div>
        </div>
      </div>

      <style>{`
        @keyframes beam-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes status-glow {
          0%, 100% { opacity: 0.5; text-shadow: 0 0 10px rgba(34, 211, 238, 0.4); }
          50% { opacity: 1; text-shadow: 0 0 30px rgba(34, 211, 238, 1); }
        }
        .animate-beam-pulse { animation: beam-pulse 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-status-glow { animation: status-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
