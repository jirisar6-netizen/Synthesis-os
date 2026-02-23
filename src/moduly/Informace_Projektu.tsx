import React from 'react';

export const Informace_Projektu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <header style={modalHeader}>
          <h2 style={brandTitle}>PIKTOS</h2>
          <span style={studioTag}>by Synthesis studio</span>
        </header>

        <div style={scrollAreaStyle}>
          
          <section style={sectionStyle}>
            <h3 style={h3Style}>🎯 POSLÁNÍ PROJEKTU</h3>
            <p>PIKTOS je profesionální <strong>asistivní komunikační nástroj (AAC)</strong>, navržený pro překonávání bariér u dětí s autismem a jinými poruchami komunikace.</p>
          </section>

          <div style={divider} />

          <section style={sectionStyle}>
            <h3 style={h3Style}>❤️ OSOBNÍ PŘÍBĚH</h3>
            <p>Tento systém vznikl z hluboké vnitřní motivace vytvořit bezpečný prostor pro komunikaci dvou klíčových osob:</p>
            <ul style={listStyle}>
              <li><strong>Daniel</strong> – syn mé bývalé partnerky Kateřiny, pro kterého hledáme cestu, jak lépe vyjádřit jeho svět.</li>
              <li><strong>Štěpánek</strong> – můj syn, kterému chceme dopřát ty nejlepší technologie pro rozvoj a vzájemné pouto s rodinou.</li>
            </ul>
          </section>

          <div style={divider} />

          <section style={sectionStyle}>
            <h3 style={h3Style}>🧬 ODBORNÉ ZÁZEMÍ</h3>
            <div style={gridInfo}>
              <div style={infoBox}>
                <strong>Standardy</strong>
                <span>Využívá metodiku ARASAAC pro augmentativní komunikaci.</span>
              </div>
              <div style={infoBox}>
                <strong>Výkon</strong>
                <span>Optimalizováno pro 144Hz displeje (Xiaomi 13T Pro).</span>
              </div>
            </div>
          </section>

        </div>

        <button onClick={onClose} style={closeBtnStyle}>ROZUMÍM</button>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' };
const contentStyle: React.CSSProperties = { background: '#300a24', padding: '25px', borderRadius: '20px', border: '1px solid #e95420', maxWidth: '500px', color: 'white', display: 'flex', flexDirection: 'column' };
const modalHeader: React.CSSProperties = { textAlign: 'center', marginBottom: '20px' };
const brandTitle: React.CSSProperties = { margin: 0, fontSize: '2rem', fontWeight: '900', color: '#e95420', letterSpacing: '3px' };
const studioTag: React.CSSProperties = { fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '1px' };
const scrollAreaStyle: React.CSSProperties = { maxHeight: '60vh', overflowY: 'auto', textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.6', paddingRight: '10px' };
const sectionStyle: React.CSSProperties = { marginBottom: '15px' };
const h3Style: React.CSSProperties = { fontSize: '1rem', color: '#e95420', marginBottom: '10px', borderBottom: '1px solid rgba(233, 84, 32, 0.2)', paddingBottom: '5px' };
const divider: React.CSSProperties = { height: '1px', background: 'rgba(255,255,255,0.1)', margin: '15px 0' };
const listStyle: React.CSSProperties = { paddingLeft: '20px', margin: '10px 0' };
const gridInfo: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' };
const infoBox: React.CSSProperties = { background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column' };
const closeBtnStyle: React.CSSProperties = { marginTop: '20px', width: '100%', padding: '15px', background: '#e95420', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' };
