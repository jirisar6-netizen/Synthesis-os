import React from 'react';
import { Komunikacni_Karta } from './Komunikacni_Karta';
import { CardData } from './Arasaac_API_Mustek';

interface Props {
  nazev: string;
  barva: string;
  karty: CardData[];
}

export const Kategorie_Sekce: React.FC<Props> = ({ nazev, barva, karty }) => {
  return (
    <div style={{ marginBottom: '30px', width: '100%' }}>
      <h2 style={{ color: barva, borderBottom: `2px solid ${barva}`, paddingBottom: '5px' }}>
        {nazev}
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', // Optimalizace pro Portrait
        gap: '15px', 
        padding: '10px 0' 
      }}>
        {karty.map(karta => (
          <Komunikacni_Karta 
            key={karta.id} 
            label={karta.label} 
            imageUrl={karta.image} 
          />
        ))}
      </div>
    </div>
  );
};
