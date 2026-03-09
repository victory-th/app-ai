
import { AppConfig } from './types';

const API_BASE_URL = 'http://72.62.243.85:3001';

/**
 * ดึงข้อมูลการตั้งค่าหลักของแอป (AppConfig) จาก Server
 * @returns {Promise<AppConfig>} ข้อมูลการตั้งค่าของแอป
 */
export const fetchAppConfig = async (): Promise<AppConfig> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/config`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const configData: AppConfig = await response.json();
    return configData;

  } catch (error) {
    console.error('Failed to fetch app config:', error);
    // ในกรณีที่ดึงข้อมูลไม่สำเร็จ เราจะ trả về mộtค่า default ที่ปลอดภัย
    // เพื่อให้แอปยังคงทำงานได้ใน Safe Mode
    return {
      safe_mode: true, // <<< สำคัญมาก: ถ้าดึงข้อมูลไม่ได้ ให้เข้า Safe Mode เสมอ
      app_video: '',
      app_audio: '',
      app_contact: '',
      promo_banner_url: '',
      teaser_btn_text: '',
      teaser_btn_link: '',
      promo_title: 'Error',
      promo_description: 'Could not load configuration.',
      api_base_url: API_BASE_URL,
    };
  }
};
