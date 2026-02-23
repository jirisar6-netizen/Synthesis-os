import { VoksType } from './VOKS_Engine';

export interface Kategorie {
  id: string;
  nazev: string;
  barva: string;
  zakladniSlova: string[];
  fazeDne: string[]; // Např. ['RANO', 'VECER', 'VZDY']
  parent?: string;
  voksType?: VoksType;
}

export const SEZNAM_KATEGORII: Kategorie[] = [
  // HLAVNÍ SLOŽKY
  { id: 'jidlo', nazev: 'JÍDLO', barva: '#E67E22', zakladniSlova: [], fazeDne: ['VZDY'], voksType: 'OBJECTS' },
  { id: 'potreby', nazev: 'POTŘEBY', barva: '#D35400', zakladniSlova: [], fazeDne: ['VZDY'], voksType: 'OBJECTS' },
  { id: 'mista', nazev: 'MÍSTA', barva: '#8E44AD', zakladniSlova: [], fazeDne: ['VZDY'], voksType: 'PLACES' },
  { id: 'zabava', nazev: 'ZÁBAVA', barva: '#27AE60', zakladniSlova: [], fazeDne: ['VZDY'], voksType: 'VERBS' },
  { id: 'rodina', nazev: 'RODINA', barva: '#F1C40F', zakladniSlova: [], fazeDne: ['VZDY'], voksType: 'PEOPLE' },

  // JÍDLO -> (Pití, Svačina, Oběd, Dobrůtka)
  { id: 'piti', nazev: 'Pití', barva: '#3498DB', zakladniSlova: ['voda', 'džus', 'čaj', 'mléko', 'kakao', 'láhev', 'hrneček', 'brčko'], fazeDne: ['VZDY'], parent: 'jidlo', voksType: 'OBJECTS' },
  { id: 'svacina', nazev: 'Svačina', barva: '#F39C12', zakladniSlova: ['jablko', 'banán', 'jogurt', 'sušenka'], fazeDne: ['VZDY'], parent: 'jidlo', voksType: 'OBJECTS' },
  { id: 'obed', nazev: 'Oběd', barva: '#D35400', zakladniSlova: ['polévka', 'maso', 'rýže', 'těstoviny'], fazeDne: ['DOPOLEDNE', 'ODPOLEDNE'], parent: 'jidlo', voksType: 'OBJECTS' },
  { id: 'dobrutka', nazev: 'Dobrůtka', barva: '#E74C3C', zakladniSlova: ['čokoláda', 'bonbón', 'zmrzlina'], fazeDne: ['VZDY'], parent: 'jidlo', voksType: 'OBJECTS' },

  // POTŘEBY -> (Záchod, Oblečení, Hygiena, Zdraví)
  { id: 'zachod', nazev: 'Záchod', barva: '#95A5A6', zakladniSlova: ['toaletní papír', 'spláchnout', 'umýt ruce', 'mýdlo', 'ručník', 'nočník', 'plenka'], fazeDne: ['VZDY'], parent: 'potreby', voksType: 'PLACES' },
  { id: 'obleceni', nazev: 'Oblečení', barva: '#34495E', zakladniSlova: ['tričko', 'kalhoty', 'ponožky', 'boty', 'mikina', 'bunda', 'čepice', 'pyžamo'], fazeDne: ['VZDY'], parent: 'potreby', voksType: 'OBJECTS' },
  { id: 'hygiena', nazev: 'Hygiena', barva: '#1ABC9C', zakladniSlova: ['kartáček', 'pasta', 'vana', 'sprcha', 'hřeben', 'stříhat nehty'], fazeDne: ['VZDY'], parent: 'potreby', voksType: 'VERBS' },
  { id: 'zdravi', nazev: 'Zdraví', barva: '#C0392B', zakladniSlova: ['bolí', 'doktor', 'sirup', 'teplota'], fazeDne: ['VZDY'], parent: 'potreby', voksType: 'OBJECTS' },

  // MÍSTA -> (Doma, Venku, Škola, Cestování)
  { id: 'doma', nazev: 'Doma', barva: '#8E44AD', zakladniSlova: ['pokoj', 'postel', 'kuchyň', 'zahrada'], fazeDne: ['VZDY'], parent: 'mista', voksType: 'PLACES' },
  { id: 'venku', nazev: 'Venku', barva: '#2ECC71', zakladniSlova: ['hřiště', 'park', 'les', 'ulice'], fazeDne: ['VZDY'], parent: 'mista', voksType: 'PLACES' },
  { id: 'skola', nazev: 'Škola', barva: '#F1C40F', zakladniSlova: ['třída', 'učitelka', 'kamarádi', 'batoh'], fazeDne: ['DOPOLEDNE'], parent: 'mista', voksType: 'PLACES' },
  { id: 'cestovani', nazev: 'Cestování', barva: '#3498DB', zakladniSlova: ['auto', 'autobus', 'vlak', 'kolo'], fazeDne: ['VZDY'], parent: 'mista', voksType: 'PLACES' },

  // ZÁBAVA -> (Screen, Hračky, Pohyb, Tvoření)
  { id: 'screen', nazev: 'Screen', barva: '#2C3E50', zakladniSlova: ['tablet', 'youtube', 'pohádka', 'hry'], fazeDne: ['VZDY'], parent: 'zabava', voksType: 'OBJECTS' },
  { id: 'hracky', nazev: 'Hračky', barva: '#E67E22', zakladniSlova: ['kostky', 'lego', 'vláček', 'plyšák'], fazeDne: ['VZDY'], parent: 'zabava', voksType: 'OBJECTS' },
  { id: 'pohyb', nazev: 'Pohyb', barva: '#27AE60', zakladniSlova: ['trampolína', 'běhat', 'skákat', 'plavat'], fazeDne: ['VZDY'], parent: 'zabava', voksType: 'VERBS' },
  { id: 'tvoreni', nazev: 'Tvoření', barva: '#E74C3C', zakladniSlova: ['kreslit', 'modelína', 'stříhat', 'lepit'], fazeDne: ['VZDY'], parent: 'zabava', voksType: 'VERBS' },

  // RODINA -> (Společně, Štěpánek, Kateřina, Táta)
  { id: 'spolecne', nazev: 'Společně', barva: '#F1C40F', zakladniSlova: ['všichni', 'babička', 'děda', 'návštěva'], fazeDne: ['VZDY'], parent: 'rodina', voksType: 'PEOPLE' },
  { id: 'stepanek', nazev: 'Štěpánek', barva: '#3498DB', zakladniSlova: ['miminko', 'spát', 'dudlík', 'jemně pohladit', 'ticho', 'kočárek'], fazeDne: ['VZDY'], parent: 'rodina', voksType: 'PEOPLE' },
  { id: 'katerina', nazev: 'Kateřina', barva: '#E91E63', zakladniSlova: ['máma', 'pusu', 'pomoc'], fazeDne: ['VZDY'], parent: 'rodina', voksType: 'PEOPLE' },
  { id: 'tata', nazev: 'Táta', barva: '#2980B9', zakladniSlova: ['Jiří', 'práce', 'auto'], fazeDne: ['VZDY'], parent: 'rodina', voksType: 'PEOPLE' }
];
