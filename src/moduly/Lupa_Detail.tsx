import React from 'react';

export const FullscreenCard: React.FC<{ image: string, label: string, onClose: () => void }> = ({ image, label, onClose }) => (
  <div style={fullscreenOverlay} onClick={onClose}>
    <img src={image} style={{ width: '80vw', maxHeight: '70vh', objectFit: 'contain', borderRadius: '20px' }} alt={label} />
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', textTransform: 'uppercase', color: 'white', marginTop: '20px', textAlign: 'center' }}>{label}</h1>
    <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem', color: 'white', cursor: 'pointer' }}>✕</div>
  </div>
);

const fullscreenOverlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.95)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000,
  padding: '20px',
  cursor: 'pointer'
};
