import React, { useState, useEffect } from 'react';

export const SOS_Editor: React.FC = () => {
  const [sosText, setSosText] = useState(
    localStorage.getItem('sos_text') || "Daniel je autista a nemluví. Prosím, volejte tátu."
  );
  const [sosPhone, setSosPhone] = useState(
    localStorage.getItem('sos_phone') || ""
  );

  useEffect(() => {
    localStorage.setItem('sos_text', sosText);
  }, [sosText]);

  useEffect(() => {
    localStorage.setItem('sos_phone', sosPhone);
  }, [sosPhone]);

  return (
    <section style={configBlock}>
      <h4 style={blockHeader}>🆘 Nastavení SOS karty</h4>
      <textarea 
        value={sosText}
        onChange={(e) => setSosText(e.target.value)}
        style={textAreaStyle}
        placeholder="Zadejte instrukce pro veřejnost..."
      />
      <div style={settingRow}>
        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Telefonní kontakt:</span>
        <input 
          type="tel" 
          value={sosPhone}
          onChange={(e) => setSosPhone(e.target.value)}
          placeholder="+420..." 
          style={inputStyle} 
        />
      </div>
    </section>
  );
};

const configBlock: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', marginBottom: '15px'
};

const blockHeader: React.CSSProperties = { margin: '0 0 10px 0', fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase' };

const settingRow: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'
};

const textAreaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '80px',
  background: 'rgba(0,0,0,0.2)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  padding: '10px',
  fontSize: '0.9rem',
  resize: 'vertical',
  fontFamily: 'inherit'
};

const inputStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.2)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '5px',
  padding: '5px 10px',
  fontSize: '0.9rem',
  width: '140px'
};
