import React from 'react';

interface Props {
  label: string;
  imageUrl: string;
}

export const Komunikacni_Karta: React.FC<Props> = ({ label, imageUrl }) => {
  const cardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.9)', // Bílé pozadí pro čitelnost symbolu
    borderRadius: '12px',
    padding: '10px',
    width: '140px',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    border: '3px solid #e95420' // Ubuntu Orange akcent
  };

  return (
    <div style={cardStyle}>
      <img 
        src={imageUrl} 
        alt={label} 
        style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
      />
      <span style={{ 
        color: '#300a24', 
        fontWeight: 'bold', 
        fontSize: '1.1rem',
        textTransform: 'uppercase' 
      }}>
        {label}
      </span>
    </div>
  );
};
