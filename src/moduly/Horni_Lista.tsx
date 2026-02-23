import React from 'react';

export const Horni_Lista: React.FC<{ onMenuClick: () => void, onInfoClick: () => void, onHistoryClick: () => void, accentColor?: string }> = ({ onMenuClick, onInfoClick, onHistoryClick, accentColor }) => {
  return (
    <div style={headerWrapper}>
      <span style={{ ...logoStyle, color: accentColor || '#e95420' }}>AISS-OS <small style={{fontSize: '0.6rem'}}>B0.1.6</small></span>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button 
          onClick={onHistoryClick} 
          style={{ background: 'none', border: 'none', color: accentColor || '#e95420', fontSize: '1.3rem', cursor: 'pointer' }}
          title="Historie změn"
        >
          🕒
        </button>
        <button 
          onClick={onInfoClick} 
          style={{ background: 'none', border: 'none', color: accentColor || '#e95420', fontSize: '1.5rem', cursor: 'pointer' }}
          title="O projektu"
        >
          ⓘ
        </button>
        <button onClick={onMenuClick} style={settingsBtn} title="Nastavení">⚙️</button>
      </div>
    </div>
  );
};

const headerWrapper: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 15px', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)'
};
const logoStyle: React.CSSProperties = { fontWeight: 'bold', color: '#e95420', fontSize: 'clamp(1rem, 3vw, 1.3rem)' };
const settingsBtn: React.CSSProperties = { 
  background: 'none', border: 'none', fontSize: '1.5rem', color: 'white', cursor: 'pointer' 
};
