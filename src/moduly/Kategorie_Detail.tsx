import React, { useEffect, useState } from 'react';
import { mluv } from './Hlasovy_Vystup';
import { fetchCommunicationCard, CardData } from './Arasaac_API_Mustek';
import { ZAKLADNI_20_SLOV } from './Kategorie_Data_Rozsirena';
import { Modalni_Nahled } from './Modalni_Nahled';

export const Kategorie_Detail: React.FC<{ id: string, onBack: () => void, onAddCard: (k: CardData) => void }> = ({ id, onBack, onAddCard }) => {
  const [karty, setKarty] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    const slova = ZAKLADNI_20_SLOV[id] || [];
    Promise.all(slova.map(s => fetchCommunicationCard(s))).then(res => {
      setKarty(res.filter((k): k is CardData => k !== null));
    });
  }, [id]);

  return (
    <div>
      <button onClick={onBack} style={backButtonStyle}>← ZPĚT</button>
      <div style={cardsGridStyle}>
        {karty.map(k => (
          <div key={k.id} style={cardWrapperStyle}>
            {/* Klik na obrázek = MLUVÍ */}
            <div onClick={() => mluv(k.label)} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <img src={k.image} alt={k.label} style={{ width: '100px' }} />
              <p style={{ fontWeight: 'bold', color: '#300a24', margin: '5px 0 0' }}>{k.label}</p>
            </div>
            
            {/* Tlačítko lupy = ZVĚTŠENÍ */}
            <button 
              onClick={() => setSelectedCard(k)}
              style={zoomIconStyle}
            > 🔍 </button>

            {/* Tlačítko plus = PŘIDAT DO VĚTY */}
            <button 
              onClick={() => onAddCard(k)}
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
const cardsGridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' };

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
