import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.victory.app",
  appName: "VictoryGame",
  webDir: "dist",
  server: {
    url: "http://72.62.243.85:3001",
    cleartext: true
  }
};

export default config;
