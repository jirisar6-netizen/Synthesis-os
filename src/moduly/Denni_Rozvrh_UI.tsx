import React, { useState, useEffect } from 'react';
import { fetchCommunicationCard } from './Arasaac_API_Mustek';
import { POCATECNI_ROZVRH, PlanovanaCinnost } from './Denni_Rozvrh_Data';
import { mluv } from './Hlasovy_Vystup';

export const Denni_Rozvrh_UI: React.FC = () => {
  const [seznam, setSeznam] = useState<PlanovanaCinnost[]>(POCATECNI_ROZVRH);
  const [ikony, setIkony] = useState<Record<string, string>>({});

  useEffect(() => {
    // Načtení ikon pro rozvrh při startu
    seznam.forEach(async (polozka) => {
      const karta = await fetchCommunicationCard(polozka.label);
      if (karta) setIkony(prev => ({ ...prev, [polozka.id]: karta.image }));
    });
  }, []);

  const prepniStav = (id: string, label: string) => {
    setSeznam(prev => prev.map(p => p.id === id ? { ...p, hotovo: !p.hotovo } : p));
    if (!seznam.find(p => p.id === id)?.hotovo) {
      mluv(`${label} hotovo. Dobrá práce!`);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#e95420', textAlign: 'center' }}>MŮJ DEN</h2>
      <div style={listStyle}>
        {seznam.map(p => (
          <div key={p.id} onClick={() => prepniStav(p.id, p.label)} style={{
            ...cardStyle, 
            opacity: p.hotovo ? 0.4 : 1,
            borderLeft: p.hotovo ? '10px solid #2ecc71' : '10px solid #e95420'
          }}>
            <span style={timeStyle}>{p.cas}</span>
            {ikony[p.id] && <img src={ikony[p.id]} style={imgStyle} alt={p.label} />}
            <span style={labelStyle}>{p.label.toUpperCase()}</span>
            {p.hotovo && <span style={checkStyle}>✅</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = { padding: '10px', height: '100%', overflowY: 'auto' };
const listStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };
const cardStyle: React.CSSProperties = { 
  background: 'white', display: 'flex', alignItems: 'center', padding: '10px', 
  borderRadius: '12px', position: 'relative', transition: '0.3s', cursor: 'pointer'
};
const timeStyle: React.CSSProperties = { fontWeight: 'bold', width: '50px', color: '#300a24' };
const imgStyle: React.CSSProperties = { width: '50px', height: '50px', margin: '0 15px' };
const labelStyle: React.CSSProperties = { flex: 1, color: '#300a24', fontWeight: 'bold' };
const checkStyle: React.CSSProperties = { fontSize: '1.5rem' };
