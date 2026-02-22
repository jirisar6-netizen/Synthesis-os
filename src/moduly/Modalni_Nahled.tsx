import React from 'react';

interface Props {
  label: string;
  imageUrl: string;
  onClose: () => void;
}

export const Modalni_Nahled: React.FC<Props> = ({ label, imageUrl, onClose }) => {
  const overlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(48, 10, 36, 0.95)', // Ubuntu Purple Dark
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', zIndex: 1000, padding: '20px'
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: '90%', maxHeight: '60%', borderRadius: '20px',
    border: '5px solid #e95420', backgroundColor: 'white'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <img src={imageUrl} alt={label} style={imageStyle} />
      <h1 style={{ color: '#ffffff', fontSize: '3rem', marginTop: '20px', textAlign: 'center' }}>
        {label.toUpperCase()}
      </h1>
      <button style={closeButtonStyle}>ZAVŘÍT</button>
    </div>
  );
};

const closeButtonStyle: React.CSSProperties = {
  marginTop: '30px', padding: '15px 40px', background: '#e95420',
  color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold'
};
