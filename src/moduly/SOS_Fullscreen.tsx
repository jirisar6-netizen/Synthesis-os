import React from 'react';
import { BRAND } from './Konfigurace_Brandu';

interface SOSFullscreenProps {
  onClose: () => void;
}

export const SOS_Fullscreen: React.FC<SOSFullscreenProps> = ({ onClose }) => {
  const sosText = localStorage.getItem('sos_text') || "Daniel je autista a nemluví. Prosím, volejte tátu.";
  const sosPhone = localStorage.getItem('sos_phone') || "+420123456789";

  return (
    <div style={sosOverlay}>
      <div style={sosCard}>
        <h1 style={sosTitle}>🆘 NOUZOVÁ KARTA</h1>
        
        <div style={sosContent}>
          <p style={sosMessage}>{sosText}</p>
          
          <div style={contactBox}>
            <span style={contactLabel}>KONTAKT NA TÁTU:</span>
            <a href={`tel:${sosPhone}`} style={phoneBtn}>
              📞 {sosPhone}
            </a>
          </div>
        </div>

        <button onClick={onClose} style={closeBtn}>ZAVŘÍT</button>
      </div>
    </div>
  );
};

const sosOverlay: React.CSSProperties = {
  position: 'fixed', inset: 0, background: '#C0392B', zIndex: 20000,
  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
};

const sosCard: React.CSSProperties = {
  background: 'white', padding: '30px', borderRadius: '30px', width: '100%', maxWidth: '400px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.5)', textAlign: 'center'
};

const sosTitle: React.CSSProperties = { color: '#C0392B', margin: '0 0 20px 0', fontSize: '1.8rem', fontWeight: '900' };

const sosContent: React.CSSProperties = { marginBottom: '30px' };

const sosMessage: React.CSSProperties = { fontSize: '1.2rem', color: '#333', lineHeight: '1.5', fontWeight: '600' };

const contactBox: React.CSSProperties = { marginTop: '30px', padding: '20px', background: '#f9f9f9', borderRadius: '20px' };

const contactLabel: React.CSSProperties = { display: 'block', fontSize: '0.8rem', color: '#666', marginBottom: '10px' };

const phoneBtn: React.CSSProperties = {
  display: 'block', padding: '20px', background: '#27AE60', color: 'white',
  textDecoration: 'none', borderRadius: '15px', fontSize: '1.5rem', fontWeight: 'bold'
};

const closeBtn: React.CSSProperties = {
  marginTop: '20px', padding: '15px 30px', background: '#eee', color: '#666',
  border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
};
