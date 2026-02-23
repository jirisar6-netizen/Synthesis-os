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

  const zobrazeneKategorie = seradKategoriePodleCasu(SEZNAM_KATEGORII);

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
            <h1 style={{ ...headerStyle, color: akcent }}>AISS ROZCESTNÍK</h1>
            <div style={gridResponzivniStyle}>
              {zobrazeneKategorie.map(kat => (
                <button 
                  key={kat.id} 
                  onClick={() => { odemkniAudio(); setVybranaKat(kat.id); }}
                  style={{ ...compactButtonStyle, backgroundColor: kat.barva }}
                >
                  {kat.nazev.toUpperCase()}
                </button>
              ))}
            </div>
            
            {/* Sekce pro rychlou reakci (stále na očích dole) */}
            <div style={quickActionArea}>
              <button onClick={() => mluv("Ano")} style={yesBtn}>ANO</button>
              <button onClick={() => mluv("Ne")} style={noBtn}>NE</button>
            </div>
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

const quickActionArea: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
  padding: '15px',
  marginTop: '10px'
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

export default App;
