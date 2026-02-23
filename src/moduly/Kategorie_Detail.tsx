import React, { useEffect, useState } from 'react';
import { mluv } from './Hlasovy_Vystup';
import { fetchCommunicationCard, fetchFallbackImage, CardData } from './Arasaac_API_Mustek';
import { ziskejAktualniFaziDne, ziskejSlovaProFazi } from './Denni_Rytmus_Logika';
import { Modalni_Nahled } from './Modalni_Nahled';
import { gridResponzivniStyle } from './Layout_Engine';

export const Kategorie_Detail: React.FC<{ id: string, onBack: () => void, onAddToSentence: (k: CardData) => void }> = ({ id, onBack, onAddToSentence }) => {
  const [karty, setKarty] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const nactiData = async () => {
      // Resetujeme karty před novým načítáním, aby Daniel neviděl starý obsah
      setKarty([]); 
      
      // Získání slov pro aktuální kategorii a fázi dne
      const slova = ziskejSlovaProFazi(id, ziskejAktualniFaziDne());
      
      if (slova.length === 0) {
        console.warn("Žádná slova pro tuto fázi dne nenalezena.");
        return;
      }

      const nacteneKarty = [];
      for (const slovo of slova) {
        // Zkusíme nejdříve ARASAAC, pak Pixabay zálohu (tvůj klíč)
        const karta = await fetchCommunicationCard(slovo) || await fetchFallbackImage(slovo);
        if (karta && isMounted) nacteneKarty.push(karta);
      }
      
      if (isMounted) setKarty(nacteneKarty);
    };

    nactiData();
    return () => { isMounted = false; };
  }, [id]); // Spustí se při každé změně kategorie

  return (
    <div>
      <button onClick={onBack} style={backButtonStyle}>← ZPĚT</button>
      <div style={gridResponzivniStyle}>
        {karty.map((k, index) => (
          <div key={`${k.id}-${index}`} style={cardWrapperStyle}>
            {/* Klik na obrázek = MLUVÍ */}
            <div onClick={() => mluv(k.label)} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src={k.image} alt={k.label} style={{ width: '100px' }} />
              <p style={labelStyle}>{k.label}</p>
            </div>
            
            {/* Tlačítko lupy = ZVĚTŠENÍ */}
            <button 
              onClick={() => setSelectedCard(k)}
              style={zoomIconStyle}
            > 🔍 </button>

            {/* Tlačítko plus = PŘIDAT DO VĚTY */}
            <button 
              onClick={() => onAddToSentence(k)}
              style={addButtonStyle}
            > + </button>
          </div>
        ))}
      </div>

      {selectedCard && (
        <Modalni_Nahled 
          label={selectedCard.label} 
          imageUrl={selectedCard.image} 
          onClose={() => setSelectedCard(null)} 
        />
      )}
    </div>
  );
};

const backButtonStyle: React.CSSProperties = { background: '#e95420', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginBottom: '15px' };

const zoomIconStyle: React.CSSProperties = {
  position: 'absolute', top: '5px', right: '5px', background: '#e95420',
  border: 'none', borderRadius: '50%', color: 'white', cursor: 'pointer',
  width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const addButtonStyle: React.CSSProperties = {
  position: 'absolute', bottom: '5px', right: '5px', background: '#2ecc71',
  border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer',
  padding: '5px 10px', fontWeight: 'bold'
};

const cardWrapperStyle: React.CSSProperties = { 
  background: 'white', padding: '15px', borderRadius: '15px', 
  position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' 
};

const labelStyle: React.CSSProperties = {
  fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
  fontWeight: '600',
  textAlign: 'center',
  color: '#300a24',
  margin: '5px 0 0'
};
