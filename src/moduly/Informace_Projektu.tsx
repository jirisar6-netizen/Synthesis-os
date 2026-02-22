import React from 'react';

export const Informace_Projektu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h2 style={{ color: '#e95420' }}>O PROJEKTU AISS-OS</h2>
        <div style={scrollAreaStyle}>
          <p><strong>Účel:</strong> Tato aplikace slouží jako asistivní komunikační nástroj (AAC) pro děti s autismem a jinými poruchami komunikace.</p>
          
          <p>
            <strong>Proč to dělám:</strong> AISS-OS vznikl z potřeby vytvořit bezpečný komunikační kanál 
            pro <strong>Daniela</strong> (syna mé bývalé partnerky Kateřiny) a pro mého vlastního syna 
            <strong>Štěpánka</strong>. Cílem je podpořit jejich vzájemné pouto i individuální rozvoj skrze 
            moderní technologie, které jim usnadní vyjadřování potřeb a emocí.
          </p>
          
          <p><strong>Odborný základ:</strong> Systém čerpá z metodiky piktogramové komunikace definované profesionály v oboru logopedie a speciální pedagogiky. Využívá mezinárodní standardy <strong>ARASAAC</strong> pro augmentativní komunikaci.</p>
          
          <p><strong>Technologie:</strong> Vyvinuto s důrazem na rychlost (144Hz optimalizace), čistotu kódu (SSM standard) a bezpečí dat.</p>
        </div>
        <button onClick={onClose} style={closeBtnStyle}>ZAVŘÍT</button>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' };
const contentStyle: React.CSSProperties = { background: '#300a24', padding: '25px', borderRadius: '20px', border: '1px solid #e95420', maxWidth: '500px', color: 'white' };
const scrollAreaStyle: React.CSSProperties = { maxHeight: '60vh', overflowY: 'auto', textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.6' };
const closeBtnStyle: React.CSSProperties = { marginTop: '20px', width: '100%', padding: '12px', background: '#e95420', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
