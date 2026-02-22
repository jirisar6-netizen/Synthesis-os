export interface Kategorie {
  id: string;
  nazev: string;
  barva: string;
  zakladniSlova: string[];
}

export const SEZNAM_KATEGORII: Kategorie[] = [
  {
    id: 'potreby',
    nazev: 'Základní potřeby',
    barva: '#e95420', // Ubuntu Orange
    zakladniSlova: ['pít', 'jíst', 'záchod', 'spát', 'pomoc']
  },
  {
    id: 'emoce',
    nazev: 'Pocity',
    barva: '#3498db', // Modrá
    zakladniSlova: ['veselý', 'smutný', 'unavený', 'bolest', 'strach']
  },
  {
    id: 'aktivity',
    nazev: 'Činnosti',
    barva: '#2ecc71', // Zelená
    zakladniSlova: ['hrát si', 'venku', 'voda', 'televize', 'auto']
  },
  {
    id: 'lidi',
    nazev: 'Lidé',
    barva: '#f1c40f', // Žlutá
    zakladniSlova: ['máma', 'táta', 'brácha', 'babička', 'děda']
  }
];
