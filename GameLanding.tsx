
import React, { useState, useEffect } from 'react';
import CelestialBackground from './CelestialBackground';

interface GameLandingProps {
  isInteractive: boolean;
}

const GameLanding: React.FC<GameLandingProps> = ({ isInteractive }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleWatchTrailer = () => {
    // Facebook Tracking for CAPI
    if (typeof (window as any).trackEventToDB === 'function') {
      (window as any).trackEventToDB('ViewContent', { 
        content_name: 'Trailer', 
        content_category: 'Game Media' 
      });
    }
    
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
    window.open(videoUrl, '_blank'); 
  };

  const handleLineClick = () => {
    // Facebook Tracking for CAPI
    if (typeof (window as any).trackEventToDB === 'function') {
      (window as any).trackEventToDB('Contact', { 
        method: 'Line',
        platform: 'Line Official Account'
      });
    }
  };

  const lineUrl = "https://lin.ee/xf5RyZW";

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 2 : 1));
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0a0c]">
      {/* Background Section */}
      <CelestialBackground />

      {/* 1. Hero Visual (Top Image) */}
      <div className="relative w-full h-[35vh] md:h-[40vh] overflow-hidden">
        <img 
          src="https://i.ibb.co/yn88rXZ9/gif-1770034937944.gif" 
          alt="Victory Animation" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 -mt-20 flex flex-col items-center w-full px-6">
        
        {/* LOGO */}
        <div className="relative mb-10 flex flex-col items-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-white to-yellow-800 shadow-[0_0_30px_rgba(234,179,8,0.3)] ring-1 ring-white/20">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                   src="https://i.ibb.co/sJzTBQTm/logo-game.png" 
                   className="w-full h-full object-cover"
                   alt="Logo"
                />
             </div>
          </div>
          <span className="mt-3 text-white/30 text-[9px] font-black tracking-[0.6em] font-futuristic uppercase">VictoryBlitz</span>
        </div>

        {/* HEADER SECTION - LIGHT BEAM / LIGHT SABER EFFECT */}
        <div className="relative text-center mb-16 animate-fade-in-up flex flex-col items-center" style={{ animationDelay: '0.2s' }}>
           
           <p className="text-cyan-400 text-[12px] md:text-[14px] tracking-[0.4em] font-bold mb-3 font-futuristic opacity-80 uppercase">
             Fictasy Vitor Game
           </p>
           
           <div className="relative flex flex-col items-center">
             
             {/* THE LIGHT BEAM (Light Saber Style) - BEHIND TEXT */}
             <div className="absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[120px] pointer-events-none z-0 overflow-visible flex items-center justify-center">
                
                {/* 1. Ambient Glow (Large soft aura) */}
                <div className="absolute inset-0 bg-cyan-600/10 blur-[80px] animate-beam-pulse" />
                
                {/* 2. Wide Horizontal Bloom (The soft light spread) */}
                <div className="absolute w-full h-[30px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-[25px]" />
                
                {/* 3. The Saber Core (The actual bright beam) */}
                {/* Outer Beam Halo */}
                <div className="absolute w-full h-[6px] bg-cyan-400/40 blur-[12px] scale-y-[0.8]" />
                
                {/* Main Visible Streak Line (The intense center) */}
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-100 via-white via-cyan-100 to-transparent shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]" />
                
                {/* 4. Center Hotspot Flare (Lens Flare core) */}
                <div className="absolute w-12 h-12 bg-white/30 rounded-full blur-[10px]" />
             </div>

             {/* TEXT CONTENT: SOLID BOLD WHITE */}
             <div className="relative z-10 flex flex-col items-center select-none">
               <h1 className="text-[54px] md:text-[84px] font-black text-white tracking-[-0.04em] leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-fantasy uppercase">
                 VICTORY
               </h1>
               <h1 className="text-[48px] md:text-[72px] font-black text-white tracking-[0.08em] leading-[0.8] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-fantasy uppercase">
                 GAME
               </h1>
             </div>
           </div>
        </div>

        {/* PROMO BOX */}
        <div className="w-full max-w-[380px] bg-[#1a1a1c]/95 backdrop-blur-[30px] rounded-[36px] p-9 border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative mb-24 overflow-hidden ring-1 ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
               <span className="text-cyan-500 font-futuristic text-lg font-black">
                  {activeSlide < 10 ? `0${activeSlide}` : activeSlide}
               </span>
               <div className="flex gap-2">
                  <div className={`h-1 rounded-full transition-all duration-500 ${activeSlide === 1 ? 'bg-cyan-500 w-8 shadow-[0_0_10px_#22d3ee]' : 'bg-white/10 w-3'}`} />
                  <div className={`h-1 rounded-full transition-all duration-500 ${activeSlide === 2 ? 'bg-cyan-500 w-8 shadow-[0_0_10px_#22d3ee]' : 'bg-white/10 w-3'}`} />
               </div>
            </div>
          </div>

          <div className="relative min-h-[90px] mb-10 text-center">
            <div className={`absolute inset-0 flex flex-col items-center transition-all duration-1000 ${activeSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
               <h3 className="text-white text-xl font-bold mb-3 tracking-tight">ปลุกจิตวิญญาณผู้กล้า</h3>
               <p className="text-gray-400 text-[12px] font-light leading-relaxed">
                  เตรียมพบกับความมันส์ระดับกาแล็กซี่ <br/> ที่จะเปลี่ยนนิยามของการผจญภัย
               </p>
            </div>
            <div className={`absolute inset-0 flex flex-col items-center transition-all duration-1000 ${activeSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
               <h3 className="text-cyan-400 text-xl font-bold mb-3 tracking-tight">พลังแห่งดวงดาว</h3>
               <p className="text-gray-400 text-[12px] font-light leading-relaxed">
                  สัมผัสภาพที่สวยงามระดับ High-End <br/> พร้อมเอฟเฟกต์การต่อสู้ที่สุดอลังการ
               </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-7 w-full">
            <button 
              onClick={handleWatchTrailer}
              className="group relative w-full h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-[#2c1a00] font-black text-lg tracking-tight shadow-[0_15px_30px_rgba(202,138,4,0.3)] transition-all hover:brightness-110 active:scale-95 overflow-hidden font-futuristic border-b-2 border-black/10"
            >
              รับชม Trailer
            </button>
            <div className="w-full flex flex-col items-center">
               <a 
                 href={lineUrl}
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={handleLineClick}
                 className="text-cyan-400 text-[13px] font-bold tracking-[0.3em] font-futuristic hover:text-white transition-colors uppercase"
               >
                 LINE: @VICTORY_GAME
               </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATUS */}
        <div className="mb-20 flex items-center gap-6 opacity-30 font-futuristic text-[8px] tracking-[0.5em] uppercase">
           <span className="text-white">SYSTEM: READY</span>
           <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
           <span className="text-cyan-400">#v2.5_stable</span>
        </div>
      </div>

      <style>{`
        @keyframes beam-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); filter: blur(80px); }
          50% { opacity: 0.6; transform: scale(1.05); filter: blur(60px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-beam-pulse { animation: beam-pulse 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default GameLanding;
