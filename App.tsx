
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameLanding from './GameLanding';
import SafePage from './SafePage';
import LoadingScreen from './LoadingScreen';
import SoundManager from './SoundManager';
import { AppConfig, PageState } from './types'; // <<< อัปเดต PageState
import { fetchAppConfig } from './api'; // <<< Import service ดึงข้อมูล

const App: React.FC = () => {
  const [viewState, setViewState] = useState<PageState>(PageState.LOADING);
  const [appConfig, setAppConfig] = useState<AppConfig | null>(null);

  // useEffect สำหรับดึงข้อมูล Config เมื่อแอปเริ่มทำงาน
  useEffect(() => {
    const loadConfig = async () => {
      const config = await fetchAppConfig();
      setAppConfig(config);

      // ตัดสินใจว่าจะไปหน้าไหนต่อ โดยอิงจาก config ที่ได้มา
      if (config.safe_mode) {
        setViewState(PageState.SAFE);
      } else {
        setViewState(PageState.PROMO);
      }
    };

    loadConfig();
  }, []); // ทำงานแค่ครั้งเดียวตอนแอปเปิด

  // Logic การแสดงผล Component ตาม ViewState
  const renderContent = () => {
    switch (viewState) {
      case PageState.LOADING:
        return <LoadingScreen progress={100} />;
      
      case PageState.SAFE:
        return <SafePage />;

      case PageState.PROMO:
        // ถ้ายังไม่มี appConfig (ระหว่างรอ) หรือ safe_mode เป็น true ก็ยังคงแสดงหน้าขาว
        if (!appConfig || appConfig.safe_mode) {
          return <SafePage />;
        }
        // ส่ง AppConfig ทั้งหมดไปให้ GameLanding และ SoundManager
        return (
          <div className="animate-in fade-in duration-1000 w-full flex flex-col items-center">
            <SoundManager audioUrl={appConfig.app_audio} />
            <GameLanding config={appConfig} />
            {/* <PromotionSection /> // เราอาจจะรวม PromotionSection เข้าไปใน GameLanding เลย */}
          </div>
        );

      default:
        return <SafePage />; // หน้า Default คือหน้าขาวเพื่อความปลอดภัย
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        {renderContent()}
      
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
    </Router>
  );
};

export default App;
