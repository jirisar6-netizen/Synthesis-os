import React, { useState } from 'react';
import { SEZNAM_KATEGORII } from './moduly/Kategorie_Karet';
import { Kategorie_Detail } from './moduly/Kategorie_Detail';
import { Paticka_Systemu } from './moduly/Paticka_Systemu';
import { CardData } from './moduly/Arasaac_API_Mustek';
import { odemkniAudio } from './moduly/Hlasovy_Vystup';
import { SYSTEM_VERSION, verzeStyle } from './moduly/Verze_Systemu';
import { Vetna_Lista_Komponenta } from './moduly/Vetna_Lista_Komponenta';

const App: React.FC = () => {
  const [vybranaKat, setVybranaKat] = useState<string | null>(null);
  const [vetnaLista, setVetnaLista] = useState<CardData[]>([]);

  const pridejDoVety = (karta: CardData) => {
    if (vetnaLista.length < 5) { // Limit pro Xiaomi 13T Pro Portrait
      setVetnaLista([...vetnaLista, karta]);
    }
  };

  const vymazVetu = () => setVetnaLista([]);

  return (
    <div style={layoutStyle}>
      {/* Větná lišta se zobrazí JEN v detailu kategorie */}
      {vybranaKat && (
        <Vetna_Lista_Komponenta 
          karty={vetnaLista} 
          onClear={vymazVetu} 
        />
      )}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {!vybranaKat ? (
          <div style={gridStyle}>
            <h1 style={headerStyle}>AISS ROZCESTNÍK</h1>
            {SEZNAM_KATEGORII.map(kat => (
              <button 
                key={kat.id} 
                onClick={() => { odemkniAudio(); setVybranaKat(kat.id); }}
                style={{ ...buttonStyle, backgroundColor: kat.barva }}
              >
                {kat.nazev.toUpperCase()}
              </button>
            ))}
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
  backgroundColor: '#300a24', 
  minHeight: '100vh', 
  padding: '10px',
  display: 'flex',
  flexDirection: 'column'
};
const gridStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '40px' };
const headerStyle: React.CSSProperties = { color: '#e95420', textAlign: 'center', marginBottom: '20px' };
const buttonStyle: React.CSSProperties = { 
  padding: '25px', borderRadius: '15px', border: 'none', color: 'white', 
  fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' 
};

export default App;
