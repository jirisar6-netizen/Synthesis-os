const API_BASE = 'https://api.arasaac.org/api/pictograms';

export interface CardData {
  id: number;
  label: string;
  image: string;
}

const fetchWithTimeout = async (url: string, options: RequestInit, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (e) {
    clearTimeout(id);
    throw e;
  }
};

export const fetchCommunicationCard = async (text: string, retries = 2): Promise<CardData | null> => {
  const searchUrl = `${API_BASE}/cs/search/${encodeURIComponent(text.toLowerCase())}`;
  
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetchWithTimeout(searchUrl, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Accept': 'application/json' }
      }, 4000);
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`API Status: ${response.status}`);
      }
      
      const data = await response.json();

      if (data && data.length > 0) {
        return {
          id: data[0]._id,
          label: text,
          image: `${API_BASE}/${data[0]._id}`
        };
      }
      return null;
    } catch (error: any) {
      const isLastRetry = i === retries;
      if (isLastRetry) {
        console.error(`AISS-OS API Error [${text}]:`, error.message || error);
        console.warn("AISS-OS: Switching to fallback sync...");
      } else {
        // Krátká pauza před dalším pokusem
        await new Promise(res => setTimeout(res, 500 * (i + 1)));
      }
    }
  }
  return null;
};

export const fetchFallbackImage = async (text: string): Promise<CardData | null> => {
  // Záložní řešení pomocí Picsum (nebo jiného servisu), pokud ARASAAC selže
  return {
    id: Math.floor(Math.random() * 1000000),
    label: text,
    image: `https://picsum.photos/seed/${encodeURIComponent(text)}/300/300`
  };
};
