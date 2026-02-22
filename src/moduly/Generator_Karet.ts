import { fetchCommunicationCard, CardData } from './Arasaac_API_Mustek';
import { SEZNAM_KATEGORII } from './Kategorie_Karet';

export const generujKategorii = async (katId: string): Promise<CardData[]> => {
  const kategorie = SEZNAM_KATEGORII.find(k => k.id === katId);
  if (!kategorie) return [];

  const kartyPromises = kategorie.zakladniSlova.map(slovo => 
    fetchCommunicationCard(slovo)
  );

  const vysledky = await Promise.all(kartyPromises);
  // Odfiltrování neúspěšných načtení
  return vysledky.filter((k): k is CardData => k !== null);
};
