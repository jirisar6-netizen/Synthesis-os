import React from 'react';
import { generujTiskovePDF } from './Export_PDF';
import { SOS_Editor } from './SOS_Editor';

interface OvladaciPanelProps {
  gridCols: number;
  setGridCols: (cols: number) => void;
  isUppercase: boolean;
  setIsUppercase: (val: boolean) => void;
  parentalLock: boolean;
  setParentalLock: (val: boolean) => void;
  onOpenSocialScripts: () => void;
  onClose: () => void;
  accentColor: string;
}

export const Ovladaci_Panel: React.FC<OvladaciPanelProps> = ({ 
  gridCols, 
  setGridCols, 
  isUppercase, 
  setIsUppercase, 
  parentalLock,
  setParentalLock,
  onOpenSocialScripts,
  onClose,
  accentColor 
}) => {
  
  const handlePdfExport = () => {
    // V reálné aplikaci bychom předali aktuální karty, zde pro demo prázdné nebo testovací pole
    generujTiskovePDF([]);
    alert("PDF bylo vygenerováno (demo režim).");
  };

  const forceReload = () => {
    window.location.reload();
  };

  return (
    <div style={overlayStyle}>
      <div style={panelWrapper}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ ...sectionTitle, color: accentColor }}>⚙️ NASTAVENÍ SYSTÉMU</h2>
          <button onClick={onClose} style={closeIconStyle}>✕</button>
        </div>

        <div style={scrollArea}>
          {/* BLOK 0: SOS KARTA */}
          <SOS_Editor />

          {/* BLOK 1: ZOBRAZENÍ (GRID & TYPOGRAFIE) */}
          <section style={configBlock}>
            <h4 style={blockHeader}>🖥️ Zobrazení</h4>
            <div style={settingRow}>
              <span>Velikost mřížky:</span>
              <select 
                value={gridCols} 
                onChange={(e) => setGridCols(Number(e.target.value))} 
                style={selectStyle}
              >
                <option value="1">1x1 (Začátečník)</option>
                <option value="2">2x2 (Standard)</option>
                <option value="3">3x3 (Pokročilý)</option>
                <option value="4">4x4 (Expert)</option>
              </select>
            </div>
            <div style={settingRow}>
              <span>Pouze VELKÁ PÍSMA:</span>
              <input 
                type="checkbox" 
                onChange={(e) => setIsUppercase(e.target.checked)} 
                checked={isUppercase} 
                style={checkboxStyle}
              />
            </div>
            <div style={settingRow}>
              <span>ZÁMEK RODIČE (Parental Lock):</span>
              <input 
                type="checkbox" 
                onChange={(e) => setParentalLock(e.target.checked)} 
                checked={parentalLock} 
                style={checkboxStyle}
              />
            </div>
          </section>

          {/* BLOK 2: SPRÁVA OBSAHU (PERSONALIZACE) */}
          <section style={configBlock}>
            <h4 style={blockHeader}>📷 Moje Karty</h4>
            <div style={btnGroup}>
              <button onClick={() => alert("Funkce nahrávání foto bude dostupná v B0.1.16")} style={actionBtn}>NAHRÁT VLASTNÍ FOTO</button>
              <button onClick={() => alert("Funkce nahrávání hlasu bude dostupná v B0.1.16")} style={actionBtn}>NAHRÁT HLAS (3s)</button>
              <button onClick={onOpenSocialScripts} style={{ ...actionBtn, background: 'rgba(39, 174, 96, 0.2)' }}>SOCIÁLNÍ PŘÍBĚHY</button>
            </div>
          </section>

          {/* BLOK 3: EXPORT A TISK */}
          <section style={configBlock}>
            <h4 style={blockHeader}>🖨️ Fyzický svět</h4>
            <button onClick={handlePdfExport} style={{ ...printBtn, background: accentColor }}>VYGENEROVAT PDF K TISKU</button>
            <p style={subText}>Vytvoří arch 5x5 cm s ořezovými značkami.</p>
          </section>

          {/* BLOK 4: DIAGNOSTIKA */}
          <section style={configBlock}>
            <h4 style={blockHeader}>🔌 Stav Konektivity</h4>
            <div style={settingRow}>
              <span>Zdroj obrázků:</span>
              <span style={{ color: '#27AE60', fontWeight: 'bold' }}>ARASAAC API (Active)</span>
            </div>
            <button onClick={forceReload} style={resetBtn}>RESETOVAT API CACHE</button>
          </section>
        </div>

        <button onClick={onClose} style={{ ...closeBtn, background: accentColor }}>HOTOVO</button>
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 10000,
  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
};

const panelWrapper: React.CSSProperties = {
  background: '#300a24', padding: '25px', borderRadius: '20px', 
  border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', width: '100%',
  color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
};

const scrollArea: React.CSSProperties = {
  maxHeight: '70vh', overflowY: 'auto', paddingRight: '10px'
};

const sectionTitle: React.CSSProperties = { margin: 0, fontSize: '1.2rem', fontWeight: 'bold' };

const configBlock: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', marginBottom: '15px'
};

const blockHeader: React.CSSProperties = { margin: '0 0 10px 0', fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase' };

const settingRow: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'
};

const selectStyle: React.CSSProperties = {
  background: '#444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px'
};

const checkboxStyle: React.CSSProperties = { width: '20px', height: '20px', cursor: 'pointer' };

const btnGroup: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };

const actionBtn: React.CSSProperties = {
  width: '100%', padding: '10px', background: 'rgba(255,255,255,0.1)', color: 'white',
  border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', fontWeight: '500'
};

const printBtn: React.CSSProperties = {
  width: '100%', padding: '12px', color: 'white', border: 'none', borderRadius: '8px',
  fontWeight: 'bold', cursor: 'pointer'
};

const resetBtn: React.CSSProperties = {
  width: '100%', padding: '10px', background: 'transparent', color: '#C0392B',
  border: '1px solid #C0392B', borderRadius: '8px', cursor: 'pointer', marginTop: '10px', fontSize: '0.8rem'
};

const subText: React.CSSProperties = { fontSize: '0.7rem', opacity: 0.5, marginTop: '5px', textAlign: 'center' };

const closeBtn: React.CSSProperties = {
  marginTop: '20px', width: '100%', padding: '15px', color: 'white',
  border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer'
};

const closeIconStyle: React.CSSProperties = {
  background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.5
};
