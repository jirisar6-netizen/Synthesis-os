const API_BASE = 'https://api.arasaac.org/api/pictograms';

export interface CardData {
  id: number;
  label: string;
  image: string;
}

export const fetchCommunicationCard = async (text: string): Promise<CardData | null> => {
  try {
    const searchUrl = `https://api.arasaac.org/api/pictograms/cs/search/${encodeURIComponent(text.toLowerCase())}`;
    
    const response = await fetch(searchUrl, {
      method: 'GET',
      mode: 'cors', // Vynucení CORS pro Chrome na Xiaomi
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) return null;
    const data = await response.json();

    if (data && data.length > 0) {
      return {
        id: data[0]._id,
        label: text,
        image: `https://api.arasaac.org/api/pictograms/${data[0]._id}`
      };
    }
    return null;
  } catch (error) {
    console.error("AISS-OS: Re-syncing API...");
    return null;
  }
};
