import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.victory.app",
  appName: "VictoryGame",
  webDir: "dist",
  server: {
    url: "https://api.adsvps.pro",
    cleartext: true
  }
};

export default config;
