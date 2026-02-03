
import React, { useState, useEffect } from 'react';
import GameLanding from './components/GameLanding';
import PromotionSection from './components/PromotionSection';
import LoadingScreen from './components/LoadingScreen';
import SoundManager from './components/SoundManager';
import { PageState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<PageState>(PageState.LOADING);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setViewState(PageState.PROMO), 1200);
          return 100;
        }
        // Cinematic loading speed
        const inc = Math.random() * (prev > 85 ? 2 : 12);
        return Math.min(prev + inc, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <SoundManager />
      
      {viewState === PageState.LOADING ? (
        <LoadingScreen progress={progress} />
      ) : (
        <div className="animate-in fade-in duration-1000 w-full flex flex-col items-center">
          <GameLanding isInteractive={true} />
          <PromotionSection />
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
