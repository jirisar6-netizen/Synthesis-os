export interface Kategorie {
  id: string;
  nazev: string;
  barva: string;
  zakladniSlova: string[];
  fazeDne: string[]; // Např. ['RANO', 'VECER', 'VZDY']
}

export const SEZNAM_KATEGORII: Kategorie[] = [
  { id: 'potreby', nazev: 'Potřeby', barva: '#D35400', zakladniSlova: ['pít', 'jíst', 'záchod', 'spát', 'pomoc'], fazeDne: ['VZDY'] },
  { id: 'jidlo', nazev: 'Jídlo', barva: '#f39c12', zakladniSlova: ['jablko', 'banán', 'jogurt', 'polévka', 'maso'], fazeDne: ['VZDY'] },
  { id: 'mista', nazev: 'Místa', barva: '#9b59b6', zakladniSlova: ['domov', 'škola', 'hřiště', 'obchod'], fazeDne: ['DOPOLEDNE', 'ODPOLEDNE'] },
  { id: 'hracky', nazev: 'Zábava', barva: '#e74c3c', zakladniSlova: ['auto', 'kostky', 'tablet', 'míč'], fazeDne: ['ODPOLEDNE', 'VECER'] },
  { id: 'zdravi', nazev: 'Zdraví', barva: '#C0392B', zakladniSlova: ['břicho', 'hlava', 'bolí', 'náplast'], fazeDne: ['VZDY'] },
  { id: 'rodina', nazev: 'NAŠE RODINA', barva: '#ffffff', zakladniSlova: ['táta', 'Daniel', 'Štěpánek', 'babička', 'děda'], fazeDne: ['VZDY'] }
];
