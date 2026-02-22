const PIXABAY_KEY = '54756897-5a46351f872e34800233a3607';

export const fetchFallbackImage = async (query: string): Promise<string | null> => {
  try {
    const q = encodeURIComponent(query.toLowerCase());
    const url = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${q}&lang=cs&image_type=vector&per_page=3`;
    const res = await fetch(url);
    const data = await res.json();
    
    // Prioritizujeme ilustrace/vektory pro čistší vzhled
    return data.hits?.[0]?.webformatURL || null;
  } catch (error) {
    console.error("Záložní API selhalo");
    return null;
  }
};
