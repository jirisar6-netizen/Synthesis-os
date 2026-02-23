export const VOKS_COLORS = {
  PEOPLE: '#F1C40F', // žlutá
  VERBS: '#27AE60',  // zelená
  OBJECTS: '#E67E22', // oranžová
  PLACES: '#8E44AD',  // fialová
  DEFAULT: '#BDC3C7'  // šedá
};

export type VoksType = 'PEOPLE' | 'VERBS' | 'OBJECTS' | 'PLACES' | 'DEFAULT';

export const getVoksColor = (type?: VoksType): string => {
  return VOKS_COLORS[type || 'DEFAULT'];
};
