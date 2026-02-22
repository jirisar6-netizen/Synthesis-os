import React from 'react';
import { CardData } from './Arasaac_API_Mustek';
import { stylListy, prehrajVetu } from './Vetna_Lista_Logika';

interface Props {
  karty: CardData[];
  onClear: () => void;
}

export const Vetna_Lista_Komponenta: React.FC<Props> = ({ karty, onClear }) => {
  return (
    <div style={stylListy}>
      {karty.map((k, index) => (
        <img key={index} src={k.image} style={{ height: '70px', borderRadius: '5px' }} />
      ))}
      {karty.length > 0 && (
        <div style={{ display: 'flex', gap: '5px', marginLeft: 'auto', alignItems: 'center' }}>
          <button onClick={() => prehrajVetu(karty)} style={playBtn}>▶️</button>
          <button onClick={onClear} style={clearBtn}>❌</button>
        </div>
      )}
    </div>
  );
};

const playBtn: React.CSSProperties = {
  background: '#2ecc71', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '1.5rem', cursor: 'pointer'
};

const clearBtn: React.CSSProperties = {
  background: '#e74c3c', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '1.5rem', cursor: 'pointer'
};
