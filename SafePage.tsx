import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SafePage: React.FC = () => {
      const location = useLocation();

        // 1. ดักจับค่า Parameter ทั้งหมดจาก URL (เช่น ?aff=P001&fbclid=...)
          const queryParams = new URLSearchParams(location.search);
            const allParams = queryParams.toString(); 

              useEffect(() => {
                    // 2. ตำแหน่งวาง Facebook Pixel (ViewContent)
                        // ยิงทันทีที่หน้าขาวโหลด เพื่อให้ Facebook รู้ว่ามีคนเข้าดูบทความ
                            if (window.fbq) {
                                      window.fbq('track', 'ViewContent', {
                                                content_name: 'บทความเทคนิคการเล่นเกม 2024',
                                                        content_category: 'Article'
                                      });
                            }
              }, []);

                const handleRedirect = () => {
                        // 3. ยิง Pixel Lead เมื่อคนกดปุ่ม (กรองเฉพาะคนสนใจจริง)
                            if (window.fbq) {
                                      window.fbq('track', 'Lead');
                            }

                                // 4. ส่งตัวไปหน้าเขียว (IP: 3000) พร้อมหิ้ว Parameter ทั้งหมดไปด้วย
                                    // ตัวอย่าง: จากหน้าขาว.com?aff=P01 -> เป็น 72.62.243.85:3000/?aff=P01
                                        const greenPageUrl = `http://72.62.243.85:3000/${allParams ? '?' + allParams : ''}`;
                                            
                                                window.location.href = greenPageUrl;
                };

                  return (
                        <div style={styles.container}>
                              {/* เนื้อหาหน้าขาว - เน้นให้ดูเหมือนเว็บสาระ/บทความ */}
                                    <nav style={styles.nav}>ศูนย์เรียนรู้เทคนิคเกมออนไลน์</nav>
                                          
                                                <main style={styles.main}>
                                                        <h1 style={styles.title}>5 วิธีจัดการงบประมาณ สำหรับการเล่นอย่างมืออาชีพ</h1>
                                                                <p style={styles.date}>อัปเดตล่าสุด: 24 พฤษภาคม 2024</p>
                                                                        
                                                                                <img 
                                                                                          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600" 
                                                                                                    alt="Gaming Strategy" 
                                                                                                              style={styles.image} 
                                                                                                                      />

                                                                                                                              <div style={styles.content}>
                                                                                                                                        <p>การบริหารเงินทุนเป็นสิ่งสำคัญที่สุด... (ใส่เนื้อหาบทความยาวๆ ประมาณ 3-4 ย่อหน้าเพื่อให้บอทอ่านแล้วเชื่อว่าเป็นเว็บสาระ)</p>
                                                                                                                                                </div>

                                                                                                                                                        {/* ปุ่ม CTA ที่จะพาไปหน้าเขียว */}
                                                                                                                                                                <button onClick={handleRedirect} style={styles.button}>
                                                                                                                                                                          เข้าสู่ระบบ / สมัครสมาชิกรับสูตรฟรี
                                                                                                                                                                                  </button>
                                                                                                                                                                                        </main>

                                                                                                                                                                                              <footer style={styles.footer}>© 2024 Game Strategy Learning Center</footer>
                                                                                                                                                                                                  </div>
                  );
};

// สไตล์ตกแต่งเบื้องต้น (พี่ปรับเปลี่ยนได้ตามชอบครับ)
const styles: { [key: string]: React.CSSProperties } = {
      container: { fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' },
        nav: { padding: '15px', backgroundColor: '#333', color: '#fff', textAlign: 'center', fontWeight: 'bold' },
          main: { maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff' },
            title: { fontSize: '24px', color: '#222', marginBottom: '10px' },
              date: { fontSize: '14px', color: '#888', marginBottom: '20px' },
                image: { width: '100%', borderRadius: '8px', marginBottom: '20px' },
                  content: { lineHeight: '1.6', color: '#444', marginBottom: '30px' },
                    button: { 
                            width: '100%', padding: '20px', fontSize: '1.5rem', fontWeight: 'bold', 
                                backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '10px', 
                                    cursor: 'pointer', boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)' 
                    },
                      footer: { textAlign: 'center', padding: '20px', fontSize: '12px', color: '#aaa' }
};

export default SafePage;
