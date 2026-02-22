import React, { useEffect, useState } from 'react';
import { mluv } from './Hlasovy_Vystup';
import { fetchCommunicationCard, CardData } from './Arasaac_API_Mustek';
import { ZAKLADNI_20_SLOV } from './Kategorie_Data_Rozsirena';

export const Kategorie_Detail: React.FC<{ id: string, onBack: () => void }> = ({ id, onBack }) => {
  const [karty, setKarty] = useState<CardData[]>([]);

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
          <div key={k.id} onClick={() => mluv(k.label)} style={cardWrapperStyle}>
            <img src={k.image} alt={k.label} style={{ width: '80%' }} />
            <p style={{ color: '#300a24', margin: '5px 0 0', fontSize: '0.8rem' }}>{k.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const backButtonStyle: React.CSSProperties = { background: '#e95420', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginBottom: '15px' };
const cardsGridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' };
const cardWrapperStyle: React.CSSProperties = { background: 'white', padding: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' };
