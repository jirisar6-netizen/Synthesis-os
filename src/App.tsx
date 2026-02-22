import React, { useState } from 'react';
import { SEZNAM_KATEGORII } from './moduly/Kategorie_Karet';
import { Kategorie_Detail } from './moduly/Kategorie_Detail';
import { Paticka_Systemu } from './moduly/Paticka_Systemu';
import { CardData } from './moduly/Arasaac_API_Mustek';
import { stylListy, prehrajVetu } from './moduly/Vetna_Lista_Logika';
import { odemkniAudio } from './moduly/Hlasovy_Vystup';

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
      <div style={stylListy}>
        {vetnaLista.map((k, index) => (
          <img key={index} src={k.image} style={{ height: '70px', borderRadius: '5px' }} />
        ))}
        {vetnaLista.length > 0 && (
          <div style={{ display: 'flex', gap: '5px', marginLeft: 'auto', alignItems: 'center' }}>
            <button onClick={() => prehrajVetu(vetnaLista)} style={playBtn}>▶️</button>
            <button onClick={vymazVetu} style={clearBtn}>❌</button>
          </div>
        )}
      </div>

      <div style={{ flex: 1 }}>
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
            onAddCard={pridejDoVety}
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

const playBtn: React.CSSProperties = {
  background: '#2ecc71', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '1.5rem', cursor: 'pointer'
};

const clearBtn: React.CSSProperties = {
  background: '#e74c3c', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '1.5rem', cursor: 'pointer'
};

export default App;
