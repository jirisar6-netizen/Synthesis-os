import React, { useState } from 'react';
import { SEZNAM_KATEGORII } from './moduly/Kategorie_Karet';
import { Kategorie_Detail } from './moduly/Kategorie_Detail';
import { Paticka_Systemu } from './moduly/Paticka_Systemu';

const App: React.FC = () => {
  const [vybranaKat, setVybranaKat] = useState<string | null>(null);

  return (
    <div style={layoutStyle}>
      <div style={{ flex: 1 }}>
        {!vybranaKat ? (
          <div style={gridStyle}>
            <h1 style={headerStyle}>AISS ROZCESTNÍK</h1>
            {SEZNAM_KATEGORII.map(kat => (
              <button 
                key={kat.id} 
                onClick={() => setVybranaKat(kat.id)}
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
          />
        )}
      </div>
      <Paticka_Systemu />
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
