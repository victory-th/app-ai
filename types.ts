
export interface GameData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  linkUrl: string;
}

export enum PageState {
  LOADING = 'LOADING',
  PROMO = 'PROMO'
}
