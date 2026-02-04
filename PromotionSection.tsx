
import React from 'react';

const PromotionSection: React.FC = () => {
  // ลิงก์นโยบายความเป็นส่วนตัวที่ถูกต้อง
  const privacyPolicyUrl = "https://sites.google.com/view/victoryblitz/privacy-policy";

  return (
    <div className="w-full max-w-2xl mx-auto bg-transparent px-6 pb-28">
      
      {/* Footer Area with Refined Styling */}
      <footer className="flex flex-col items-center gap-14 pt-20 border-t border-white/10 relative overflow-hidden">
        
        {/* Subtle Ambient Light behind footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-500/20 blur-[30px]" />

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-[13px] tracking-tight">
           <a 
             href={privacyPolicyUrl} 
             target="_blank" 
             rel="noopener noreferrer"
             className="relative group py-2"
           >
             <span className="group-hover:text-blue-400 transition-colors duration-300">Privacy Policy</span>
             <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500/60 transition-all duration-500 group-hover:w-full" />
           </a>
           
           <span className="text-white/5 font-thin">/</span>
           
           <div className="flex flex-col items-center leading-tight group cursor-pointer">
              <a href="#" className="group-hover:text-white transition-colors duration-300">Terms of Service</a>
              <span className="text-[8px] mt-1 font-bold tracking-[0.2em] uppercase text-gray-600">Support_Center</span>
           </div>
           
           <span className="text-white/5 font-thin">/</span>
           
           <a href="#" className="relative group py-2">
             <span className="group-hover:text-white transition-colors duration-300">Contact Support</span>
             <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white/20 transition-all duration-500 group-hover:w-full group-hover:left-0" />
           </a>
        </div>
        
        {/* Studio Branding */}
        <div className="text-center relative py-4 px-10">
          <p className="text-[13px] text-gray-500 font-black tracking-[0.4em] uppercase opacity-70 transition-all hover:opacity-100 hover:text-white">
            © 2026 VICTORYBLITZ STUDIO
          </p>
          <div className="w-8 h-[1px] bg-blue-500/40 mx-auto mt-4" />
        </div>

        {/* Facebook Legal Disclaimer & Pixel Note */}
        <div className="mt-6 px-10 text-center select-none opacity-40 hover:opacity-80 transition-opacity duration-700">
          <p className="text-[9px] leading-relaxed text-gray-500 max-w-[340px] mx-auto font-light tracking-wide uppercase">
            This site is not a part of the Facebook website or Facebook Inc. <br/>
            Additionally, This site is NOT endorsed by Facebook in any way. <br/>
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          
          {/* Pixel/CAPI status removed to keep UI clean (no visible tracking info) */}
        </div>

      </footer>
    </div>
  );
};

export default PromotionSection;
