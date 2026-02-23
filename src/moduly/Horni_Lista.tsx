import React from 'react';
import { BRAND } from './Konfigurace_Brandu';

export const Horni_Lista: React.FC<{ 
  onMenuClick: () => void, 
  onInfoClick: () => void, 
  onHistoryClick: () => void, 
  onLogoClick: () => void,
  accentColor?: string 
}> = ({ onMenuClick, onInfoClick, onHistoryClick, onLogoClick, accentColor }) => {
  return (
    <div style={headerStyle}>
      <div style={brandContainer} onClick={onLogoClick}>
        <span style={{ ...piktosTitle, color: accentColor || '#e95420' }}>PIKTOS</span>
        <span style={studioSubtitle}>by Synthesis studio</span>
      </div>
      <div style={iconGroup}>
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

const headerStyle: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '10px 15px', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)'
};

const brandContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
};

const piktosTitle: React.CSSProperties = { 
  fontWeight: '900', 
  letterSpacing: '2px', 
  color: '#e95420', 
  fontSize: '1.4rem' 
};

const studioSubtitle: React.CSSProperties = { 
  fontSize: '0.6rem', 
  textTransform: 'uppercase', 
  opacity: 0.7,
  display: 'block',
  marginTop: '-5px',
  color: 'white'
};

const iconGroup: React.CSSProperties = { 
  display: 'flex', 
  gap: '15px', 
  alignItems: 'center' 
};

const settingsBtn: React.CSSProperties = { 
  background: 'none', border: 'none', fontSize: '1.5rem', color: 'white', cursor: 'pointer' 
};
