import React, { useState } from 'react';
import { SEZNAM_KATEGORII } from './moduly/Kategorie_Karet';
import { Kategorie_Detail } from './moduly/Kategorie_Detail';
import { Paticka_Systemu } from './moduly/Paticka_Systemu';
import { CardData } from './moduly/Arasaac_API_Mustek';
import { mluv, odemkniAudio } from './moduly/Hlasovy_Vystup';
import { SYSTEM_VERSION, verzeStyle } from './moduly/Verze_Systemu';
import { Vetna_Lista_Komponenta } from './moduly/Vetna_Lista_Komponenta';
import { Horni_Lista } from './moduly/Horni_Lista';
import { gridResponzivniStyle } from './moduly/Layout_Engine';
import { Informace_Projektu } from './moduly/Informace_Projektu';
import { ziskejAktualniFaziDne, seradKategoriePodleCasu } from './moduly/Denni_Rytmus_Logika';
import { Historie_Zmen_Komponenta } from './moduly/Historie_Zmen_Komponenta';

const App: React.FC = () => {
  const [vybranaKat, setVybranaKat] = useState<string | null>(null);
  const [vetnaLista, setVetnaLista] = useState<CardData[]>([]);
  const [tmavyRezim, setTmavyRezim] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const aktualniBarvaPozadi = tmavyRezim ? '#300a24' : '#1A1A1A';
  const akcent = tmavyRezim ? '#e95420' : '#3498db';

  const pridejDoVety = (karta: CardData) => {
    if (vetnaLista.length < 5) { // Limit pro Xiaomi 13T Pro Portrait
      setVetnaLista([...vetnaLista, karta]);
    }
  };

  const vymazVetu = () => setVetnaLista([]);

  const faze = ziskejAktualniFaziDne();
  const zobrazeneKategorie = seradKategoriePodleCasu(SEZNAM_KATEGORII);

  const renderRytmusZona = () => {
    const tecky = ['RANO', 'DOPOLEDNE', 'ODPOLEDNE', 'VECER'];
    return (
      <div style={rytmBar}>
        <span style={{ fontWeight: 'bold' }}>FÁZE: {faze}</span>
        <div style={miniSchedule}>
          {tecky.map(t => (
            <span key={t} style={t === faze ? activeDot : inactiveDot}>●</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ ...layoutStyle, backgroundColor: aktualniBarvaPozadi }}>
      <Horni_Lista 
        onMenuClick={() => setShowMenu(!showMenu)} 
        onInfoClick={() => setShowInfo(true)}
        onHistoryClick={() => setShowHistory(true)}
        accentColor={akcent} 
      />
      
      {showMenu && (
        <div style={menuOverlayStyle}>
          <div style={menuContentStyle}>
            <h3 style={{ color: akcent, marginTop: 0 }}>NASTAVENÍ</h3>
            <button onClick={() => setTmavyRezim(!tmavyRezim)} style={{ ...menuBtnStyle, background: akcent }}>
              🎨 Styl: {tmavyRezim ? 'Ubuntu Purple' : 'Deep Night'}
            </button>
            <button onClick={() => { setShowInfo(true); setShowMenu(false); }} style={{ ...menuBtnStyle, background: '#555', marginTop: '10px' }}>
              ℹ️ O PROJEKTU
            </button>
            <button onClick={() => setShowMenu(false)} style={{ ...menuBtnStyle, background: '#777', marginTop: '10px' }}>
              ZAVŘÍT
            </button>
          </div>
        </div>
      )}

      {showInfo && <Informace_Projektu onClose={() => setShowInfo(false)} />}
      {showHistory && <Historie_Zmen_Komponenta onClose={() => setShowHistory(false)} />}

      {/* Větná lišta se zobrazí JEN v detailu kategorie */}
      {vybranaKat && (
        <Vetna_Lista_Komponenta 
          karty={vetnaLista} 
          onClear={vymazVetu} 
        />
      )}

      <div style={contentStyle}>
        {!vybranaKat ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {renderRytmusZona()}
            
            <h1 style={{ ...headerStyle, color: akcent }}>AISS ROZCESTNÍK</h1>
            
            <main style={gridResponzivniStyle}>
              {zobrazeneKategorie.map(kat => (
                <button 
                  key={kat.id} 
                  onClick={() => { odemkniAudio(); setVybranaKat(kat.id); }}
                  style={{ ...compactButtonStyle, backgroundColor: kat.barva }}
                >
                  {kat.nazev.toUpperCase()}
                </button>
              ))}
            </main>
            
            {/* RYCHLÁ KOMUNIKACE - Fixní dole */}
            <footer style={quickDock}>
              <button onClick={() => mluv("Ano")} style={yesBtn}>ANO</button>
              <button onClick={() => mluv("Ne")} style={noBtn}>NE</button>
              
              {/* Mini Emoční Teploměr */}
              <div style={moodBar}>
                <div onClick={() => mluv("Cítím se dobře")} style={{...moodPoint, background: '#27AE60'}}></div>
                <div onClick={() => mluv("Je mi to jedno")} style={{...moodPoint, background: '#F39C12'}}></div>
                <div onClick={() => mluv("Necítím se dobře")} style={{...moodPoint, background: '#C0392B'}}></div>
              </div>
            </footer>
          </div>
        ) : (
          <Kategorie_Detail 
            id={vybranaKat} 
            onBack={() => setVybranaKat(null)} 
            onAddToSentence={pridejDoVety}
          />
        )}
      </div>
      
      <Paticka_Systemu />
      <div style={verzeStyle}>
        AISS-OS {SYSTEM_VERSION}
      </div>
    </div>
  );
};

const layoutStyle: React.CSSProperties = { 
  minHeight: '100vh', 
  display: 'flex',
  flexDirection: 'column'
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  display: 'flex',
  flexDirection: 'column'
};

const headerStyle: React.CSSProperties = { color: '#e95420', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '800' };

const compactButtonStyle: React.CSSProperties = { 
  padding: '20px 10px', 
  borderRadius: '12px', 
  border: 'none', 
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: '80px',
  cursor: 'pointer'
};

const yesBtn: React.CSSProperties = { flex: 1, padding: '25px', background: '#27AE60', color: 'white', borderRadius: '15px', fontWeight: 'bold', border: 'none', fontSize: 'clamp(1rem, 3vw, 1.4rem)', cursor: 'pointer' };
const noBtn: React.CSSProperties = { flex: 1, padding: '25px', background: '#C0392B', color: 'white', borderRadius: '15px', fontWeight: 'bold', border: 'none', fontSize: 'clamp(1rem, 3vw, 1.4rem)', cursor: 'pointer' };

const menuOverlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.8)', zIndex: 10000,
  display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const menuContentStyle: React.CSSProperties = {
  background: 'white', padding: '20px', borderRadius: '15px', width: '80%', maxWidth: '300px'
};

const menuBtnStyle: React.CSSProperties = {
  width: '100%', padding: '15px', borderRadius: '10px', border: 'none',
  background: '#e95420', color: 'white', fontWeight: 'bold', cursor: 'pointer'
};

const quickDock: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px',
  marginTop: 'auto',
  background: 'rgba(0,0,0,0.3)',
  borderRadius: '20px 20px 0 0',
  backdropFilter: 'blur(10px)'
};

const moodBar: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  padding: '5px',
  background: 'rgba(255,255,255,0.1)',
  borderRadius: '10px'
};

const moodPoint: React.CSSProperties = {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  cursor: 'pointer',
  border: '1px solid rgba(255,255,255,0.2)'
};

const rytmBar: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 15px',
  background: 'rgba(233, 84, 32, 0.15)',
  borderRadius: '10px',
  marginBottom: '15px',
  color: 'white',
  fontSize: '0.8rem'
};

const miniSchedule: React.CSSProperties = {
  display: 'flex',
  gap: '5px'
};

const activeDot: React.CSSProperties = { color: '#e95420', fontSize: '1.2rem' };
const inactiveDot: React.CSSProperties = { color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem' };

export default App;
