const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
  origin: '*', // หรือใส่เฉพาะโดเมนแอปของคุณเพื่อความปลอดภัยสูงสุด
  methods: ['GET', 'POST']
}));
app.use(express.json());

// เส้นทางสำหรับดึงวิดีโอ Teaser
app.get('/api/config', (req, res) => {
  res.json({
    videoUrl: "https://api.adsvps.pro/assets/trailer.mp4",
    lineContact: "@VICTORY_GAME"
  });
});

// เส้นทางสำหรับรับข้อมูล Tracking (Facebook CAPI / Google Ads)
app.post('/api/track', (req, res) => {
  console.log("Received Tracking:", req.body);
  // ตรงนี้ใส่ Logic สำหรับส่งค่าไป Meta หรือ Google
  res.status(200).send({ status: 'success' });
});

app.listen(PORT, () => {
  console.log(`Server Victory Game running on port ${PORT}`);
});