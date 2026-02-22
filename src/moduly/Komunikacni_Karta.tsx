import React from 'react';

interface Props {
  label: string;
  imageUrl: string;
}

export const Komunikacni_Karta: React.FC<Props & { onAdd: () => void }> = ({ label, imageUrl, onAdd }) => {
  return (
    <div style={cardStyle}>
      <button onClick={(e) => { e.stopPropagation(); onAdd(); }} style={addButtonStyle}> + </button>
      <img src={imageUrl} alt={label} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
      <span style={labelStyle}>{label}</span>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  padding: '10px',
  width: '140px',
  height: '160px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  border: '3px solid #e95420',
  position: 'relative'
};

const labelStyle: React.CSSProperties = {
  color: '#300a24',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'uppercase',
  textAlign: 'center'
};

const addButtonStyle: React.CSSProperties = {
  position: 'absolute', bottom: '5px', right: '5px',
  background: '#2ecc71', color: 'white', border: 'none',
  borderRadius: '5px', fontWeight: 'bold', padding: '5px 10px',
  cursor: 'pointer'
};
