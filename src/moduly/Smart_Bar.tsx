import React, { useEffect, useState } from 'react';
import { CardData, fetchCommunicationCard } from './Arasaac_API_Mustek';
import { mluv } from './Hlasovy_Vystup';
import { ziskejAktualniFaziDne } from './Denni_Rytmus_Logika';
import { hapticFeedback } from './Haptics_Engine';

interface MiniKartaProps {
  label: string;
  accentColor: string;
}

const MiniKarta: React.FC<MiniKartaProps> = ({ label, accentColor }) => {
  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchCommunicationCard(label);
      if (data) setCard(data);
    };
    load();
  }, [label]);

  if (!card) return null;

  return (
    <div 
      onClick={() => { hapticFeedback('light'); mluv(card.label); }}
      style={{ ...miniCardStyle, border: `2px solid ${accentColor}` }}
    >
      <img src={card.image} alt={card.label} style={miniImgStyle} />
      <span style={miniLabelStyle}>{card.label.toUpperCase()}</span>
    </div>
  );
};

export const SmartBar: React.FC<{ accentColor: string }> = ({ accentColor }) => {
  const faze = ziskejAktualniFaziDne();
  
  const getPredikce = () => {
    switch (faze) {
      case 'RANO': return ['pít', 'jíst', 'záchod', 'oblékat'];
      case 'DOPOLEDNE': return ['škola', 'batoh', 'pít', 'svačina'];
      case 'ODPOLEDNE': return ['hřiště', 'tablet', 'kostky', 'venku'];
      case 'VECER': return ['sprcha', 'pyžamo', 'postel', 'pohádka'];
      default: return ['pít', 'jíst', 'záchod', 'pomoc'];
    }
  };

  const predikce = getPredikce();

  return (
    <div style={smartBarWrapper}>
      <span style={labelStyle}>RYCHLÁ VOLBA:</span>
      <div style={predictionList}>
        {predikce.map(slovo => (
          <MiniKarta key={slovo} label={slovo} accentColor={accentColor} />
        ))}
      </div>
    </div>
  );
};

const smartBarWrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '10px 15px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '15px',
  marginBottom: '10px',
  border: '1px solid rgba(255, 255, 255, 0.1)'
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 'bold',
  color: 'rgba(255, 255, 255, 0.5)',
  letterSpacing: '1px'
};

const predictionList: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  overflowX: 'auto',
  paddingBottom: '5px'
};

const miniCardStyle: React.CSSProperties = {
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  padding: '8px',
  borderRadius: '12px',
  width: '70px',
  cursor: 'pointer',
  transition: 'transform 0.1s'
};

const miniImgStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  objectFit: 'contain'
};

const miniLabelStyle: React.CSSProperties = {
  fontSize: '0.6rem',
  fontWeight: 'bold',
  color: '#300a24',
  marginTop: '4px',
  textAlign: 'center'
};
