
// โครงสร้างข้อมูลหลักที่ดึงมาจาก Server (Supabase/VPS)
// ซึ่งจะตรงกับโครงสร้างตารางในฐานข้อมูล
export interface AppConfig {
  safe_mode: boolean;         // โหมดส่งตรวจ (true = หน้าขาว, false = หน้าจริง)
  app_video: string;          // GIF หรือวิดีโอหลักของแอป
  app_audio: string;          // เพลงประกอบ
  app_contact: string;        // ลิงก์ติดต่อ (เช่น LINE OA)
  promo_banner_url: string;   // URL ของป้าย Banner เพิ่มเติม
  teaser_btn_text: string;    // ข้อความบนปุ่ม Teaser/CTA หลัก
  teaser_btn_link: string;    // ลิงก์ปลายทางของปุ่ม Teaser
  promo_title: string;        // ชื่อโปรโมชั่นหลัก
  promo_description: string;  // รายละเอียดโปรโมชั่น/กิจกรรม

  // Properties ที่ใช้ในฝั่ง Client เท่านั้น ไม่ได้ดึงมาจาก DB
  api_base_url: string; 
}

// สถานะการแสดงผลของแอป
export enum PageState {
  LOADING = 'LOADING', // กำลังโหลดข้อมูล
  PROMO = 'PROMO',     // แสดงหน้าโปรโมชั่น/เกม
  SAFE = 'SAFE'        // แสดงหน้าขาว
}
