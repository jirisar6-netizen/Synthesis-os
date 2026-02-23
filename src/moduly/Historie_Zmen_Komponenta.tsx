import React from 'react';
import { HISTORIE_ZMEN } from './Seznam_Zmen_Data';

export const Historie_Zmen_Komponenta: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h2 style={{ color: '#e95420', marginTop: 0 }}>HISTORIE ZMĚN (CHANGELOG)</h2>
        <div style={scrollAreaStyle}>
          {HISTORIE_ZMEN.map((zmena, index) => (
            <div key={index} style={itemStyle}>
              <div style={metaStyle}>
                <span style={verzeStyle}>{zmena.verze}</span>
                <span style={datumStyle}>{zmena.datum}</span>
              </div>
              <p style={popisStyle}>{zmena.popis}</p>
            </div>
          ))}
        </div>
        <button onClick={onClose} style={closeBtnStyle}>ZAVŘÍT</button>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = { 
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 4000, 
  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' 
};

const contentStyle: React.CSSProperties = { 
  background: '#1a1a1a', padding: '25px', borderRadius: '20px', 
  border: '1px solid #e95420', maxWidth: '500px', width: '100%', color: 'white' 
};

const scrollAreaStyle: React.CSSProperties = { 
  maxHeight: '60vh', overflowY: 'auto', textAlign: 'left' 
};

const itemStyle: React.CSSProperties = {
  borderBottom: '1px solid rgba(233, 84, 32, 0.2)',
  padding: '10px 0',
  marginBottom: '5px'
};

const metaStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '5px'
};

const verzeStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#e95420',
  fontSize: '0.9rem'
};

const datumStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  opacity: 0.6
};

const popisStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '0.85rem',
  lineHeight: '1.4'
};

const closeBtnStyle: React.CSSProperties = { 
  marginTop: '20px', width: '100%', padding: '12px', 
  background: '#e95420', color: 'white', border: 'none', 
  borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' 
};
