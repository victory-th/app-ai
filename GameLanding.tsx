
import React from 'react';
import CelestialBackground from './CelestialBackground';
import { AppConfig } from './types';

interface GameLandingProps {
  config: AppConfig;
}

const GameLanding: React.FC<GameLandingProps> = ({ config }) => {

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0a0c]">
      <CelestialBackground />

      {/* 1. Hero Visual (Top Image) - ใช้ app_video จาก config */}
      {config.app_video && (
        <div className="relative w-full h-[35vh] md:h-[40vh] overflow-hidden">
          <img 
            src={config.app_video} 
            alt="Victory Animation" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
        </div>
      )}

      <div className="relative z-20 -mt-20 flex flex-col items-center w-full px-6">
        
        {/* PROMO BANNER - แสดงผลจาก promo_banner_url */}
        {config.promo_banner_url && (
            <div className="relative mb-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-lg animate-fade-in-up">
                <img src={config.promo_banner_url} alt="Promotional Banner" className="w-full h-auto" />
            </div>
        )}

        {/* HEADER SECTION - ใช้ promo_title และ promo_description */}
        <div className="relative text-center mb-16 animate-fade-in-up flex flex-col items-center" style={{ animationDelay: '0.2s' }}>
           <h1 className="text-[54px] md:text-[84px] font-black text-white tracking-[-0.04em] leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-fantasy uppercase">
             {config.promo_title}
           </h1>
           <p className="text-gray-400 text-md font-light leading-relaxed max-w-md mx-auto mt-4" dangerouslySetInnerHTML={{ __html: config.promo_description }} />
        </div>

        {/* CTA BOX */}
        <div className="w-full max-w-[380px] bg-[#1a1a1c]/95 backdrop-blur-[30px] rounded-[36px] p-9 border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative mb-24 overflow-hidden ring-1 ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col items-center gap-7 w-full">
            {/* CTA Button 1 (Teaser) - ใช้ teaser_btn_link และ teaser_btn_text */}
            <a 
              href={config.teaser_btn_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-[#2c1a00] font-black text-lg tracking-tight shadow-[0_15px_30px_rgba(202,138,4,0.3)] transition-all hover:brightness-110 active:scale-95 overflow-hidden font-futuristic border-b-2 border-black/10 text-center flex items-center justify-center"
            >
              {config.teaser_btn_text}
            </a>

            {/* CTA Button 2 (LINE) - ใช้ app_contact */}
            <div className="w-full flex flex-col items-center">
               <a 
                 href={config.app_contact}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-cyan-400 text-[13px] font-bold tracking-[0.3em] font-futuristic hover:text-white transition-colors uppercase"
               >
                 LINE: @VICTORY_GAME
               </a>
            </div>
          </div>
        </div>

        <div className="mb-20 flex items-center gap-6 opacity-30 font-futuristic text-[8px] tracking-[0.5em] uppercase">
           <span className="text-white">SYSTEM: READY</span>
           <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
           <span className="text-cyan-400">#v3.0_dynamic</span>
        </div>
      </div>
    </div>
  );
};

export default GameLanding;
