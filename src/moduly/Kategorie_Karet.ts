export interface Kategorie {
  id: string;
  nazev: string;
  barva: string;
  zakladniSlova: string[];
}

export const SEZNAM_KATEGORII: Kategorie[] = [
  { id: 'potreby', nazev: 'Potřeby', barva: '#e95420', zakladniSlova: ['pít', 'jíst', 'záchod', 'spát', 'pomoc'] },
  { id: 'jidlo', nazev: 'Jídlo', barva: '#f39c12', zakladniSlova: ['jablko', 'banán', 'jogurt', 'polévka', 'maso'] },
  { id: 'mista', nazev: 'Místa', barva: '#9b59b6', zakladniSlova: ['domov', 'škola', 'hřiště', 'obchod'] },
  { id: 'hracky', nazev: 'Zábava', barva: '#e74c3c', zakladniSlova: ['auto', 'kostky', 'tablet', 'míč'] },
  { id: 'zdravi', nazev: 'Zdraví', barva: '#c0392b', zakladniSlova: ['břicho', 'hlava', 'bolí', 'náplast'] }
];
