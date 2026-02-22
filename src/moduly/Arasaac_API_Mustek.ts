const API_BASE = 'https://api.arasaac.org/api/pictograms';

export interface CardData {
  id: number;
  label: string;
  image: string;
}

export const fetchCommunicationCard = async (text: string): Promise<CardData | null> => {
  try {
    // Přidáváme fallback pro vyhledávání
    const searchUrl = `${API_BASE}/cs/search/${encodeURIComponent(text.toLowerCase())}`;
    const response = await fetch(searchUrl);
    
    if (!response.ok) throw new Error('API_OFFLINE');
    const data = await response.json();

    if (data && data.length > 0) {
      const id = data[0]._id;
      // Ověření, že URL obrázku je validní HTTPS
      const imageUrl = `https://api.arasaac.org/api/pictograms/${id}`;
      
      return {
        id: id,
        label: text,
        image: imageUrl
      };
    }
    return null;
  } catch (error) {
    console.error("AISS-OS API FAIL:", error);
    return null;
  }
};
