
import React, { useState, useEffect } from 'react';
import GameLanding from './GameLanding';
import PromotionSection from './PromotionSection';
import LoadingScreen from './LoadingScreen';
import SoundManager from './SoundManager';
import { PageState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<PageState>(PageState.LOADING);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const startLoading = () => {
      timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev >= 100 ? 100 : Math.min(prev + Math.random() * (prev > 85 ? 2 : 12), 100);
          
          // When progress reaches 100%, transition to PROMO after delay
          if (newProgress >= 100 && timer) {
            clearInterval(timer);
            timer = null;
            timeoutId = setTimeout(() => setViewState(PageState.PROMO), 1200);
          }
          
          return newProgress;
        });
      }, 120);
    };

    startLoading();

    return () => {
      if (timer) clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
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
