import { ZAKLADNI_20_SLOV } from './Kategorie_Data_Rozsirena';
import { Kategorie } from './Kategorie_Karet';

export const ziskejAktualniFaziDne = () => {
  const hodina = new Date().getHours();

  if (hodina >= 6 && hodina < 10) return 'RANO';
  if (hodina >= 10 && hodina < 14) return 'DOPOLEDNE';
  if (hodina >= 14 && hodina < 18) return 'ODPOLEDNE';
  return 'VECER';
};

export const seradKategoriePodleCasu = (kategorie: Kategorie[]) => {
  const faze = ziskejAktualniFaziDne();
  
  return [...kategorie].sort((a, b) => {
    const aJeAktivni = a.fazeDne.includes(faze) || a.fazeDne.includes('VZDY');
    const bJeAktivni = b.fazeDne.includes(faze) || b.fazeDne.includes('VZDY');
    
    if (aJeAktivni && !bJeAktivni) return -1;
    if (!aJeAktivni && bJeAktivni) return 1;
    return 0;
  });
};

export const ziskejSlovaProFazi = (kategorieId: string, faze: string) => {
  const vsechnaSlova = ZAKLADNI_20_SLOV[kategorieId] || [];
  
  // Prozatím vracíme všechna slova, ale v budoucnu zde může být logika pro filtrování podle fáze
  // Např. v kategorii 'potreby' ráno 'zuby', večer 'spaní' atd.
  return vsechnaSlova;
};
