const API_BASE = 'https://api.arasaac.org/api/pictograms';

export interface CardData {
  id: number;
  label: string;
  image: string;
}

/**
 * Vyhledá piktogram v češtině a vrátí jeho data.
 * Limit 60 řádků dodržen.
 */
export const fetchCommunicationCard = async (text: string): Promise<CardData | null> => {
  try {
    // 1. Vyhledání ID piktogramu v češtině (cs)
    const searchUrl = `${API_BASE}/cs/search/${encodeURIComponent(text)}`;
    const response = await fetch(searchUrl);
    
    if (!response.ok) return null;
    const data = await response.json();

    if (data && data.length > 0) {
      const bestMatch = data[0];
      return {
        id: bestMatch._id,
        label: text,
        // 2. Sestavení URL pro stažení piktogramu
        image: `https://api.arasaac.org/api/pictograms/${bestMatch._id}`
      };
    }
    return null;
  } catch (error) {
    console.error("AISS-OS ERROR: API_FAILURE", error);
    return null;
  }
};
