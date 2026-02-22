import React, { useEffect, useState } from 'react';
import { SEZNAM_KATEGORII } from './moduly/Kategorie_Karet';
import { generujKategorii } from './moduly/Generator_Karet';
import { Kategorie_Sekce } from './moduly/Kategorie_Sekce';
import { CardData } from './moduly/Arasaac_API_Mustek';

const App: React.FC = () => {
  const [data, setData] = useState<Record<string, CardData[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nactiVse = async () => {
      const vysledky: Record<string, CardData[]> = {};
      for (const kat of SEZNAM_KATEGORII) {
        vysledky[kat.id] = await generujKategorii(kat.id);
      }
      setData(vysledky);
      setLoading(false);
    };
    nactiVse();
  }, []);

  if (loading) return <div style={loadingStyle}>AISS-OS: NAČÍTÁNÍ API...</div>;

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>AISS KOMUNIKÁTOR</header>
      <div style={scrollAreaStyle}>
        {SEZNAM_KATEGORII.map(kat => (
          <Kategorie_Sekce 
            key={kat.id} 
            nazev={kat.nazev} 
            barva={kat.barva} 
            karty={data[kat.id] || []} 
          />
        ))}
      </div>
    </div>
  );
};

// --- STYLY (Ubuntu Glassmorphism) ---
const containerStyle: React.CSSProperties = {
  backgroundColor: '#300a24', minHeight: '100vh', color: 'white', padding: '15px'
};
const headerStyle: React.CSSProperties = {
  fontSize: '1.2rem', fontWeight: 'bold', color: '#e95420', textAlign: 'center', marginBottom: '20px'
};
const scrollAreaStyle: React.CSSProperties = {
  height: 'calc(100vh - 80px)', overflowY: 'auto', paddingBottom: '50px'
};
const loadingStyle: React.CSSProperties = {
  backgroundColor: '#300a24', height: '100vh', display: 'flex', 
  justifyContent: 'center', alignItems: 'center', color: '#e95420'
};

export default App;
