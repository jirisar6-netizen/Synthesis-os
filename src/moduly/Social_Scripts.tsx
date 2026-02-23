import React, { useState } from 'react';
import { CardData } from './Arasaac_API_Mustek';
import { mluv } from './Hlasovy_Vystup';

interface ScriptStep {
  label: string;
  image: string;
}

interface SocialScript {
  id: string;
  title: string;
  steps: ScriptStep[];
}

const SCRIPTS: SocialScript[] = [
  {
    id: 'doktor',
    title: 'U DOKTORA',
    steps: [
      { label: 'Jdeme k doktorovi', image: 'https://api.arasaac.org/api/pictograms/3119' },
      { label: 'Čekáme v čekárně', image: 'https://api.arasaac.org/api/pictograms/7452' },
      { label: 'Pan doktor mě prohlédne', image: 'https://api.arasaac.org/api/pictograms/2439' },
      { label: 'Dostanu náplast', image: 'https://api.arasaac.org/api/pictograms/2452' },
      { label: 'Hotovo, jdeme domů', image: 'https://api.arasaac.org/api/pictograms/2458' }
    ]
  },
  {
    id: 'stepanek',
    title: 'PÉČE O ŠTĚPÁNKA',
    steps: [
      { label: 'Štěpánek spinká', image: 'https://api.arasaac.org/api/pictograms/2464' },
      { label: 'Budeme potichu', image: 'https://api.arasaac.org/api/pictograms/2466' },
      { label: 'Štěpánek má hlad', image: 'https://api.arasaac.org/api/pictograms/2468' },
      { label: 'Dáme mu mlíčko', image: 'https://api.arasaac.org/api/pictograms/2470' },
      { label: 'Budeme si hrát', image: 'https://api.arasaac.org/api/pictograms/2472' }
    ]
  }
];

export const Social_Scripts_Manager: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeScript, setActiveScript] = useState<SocialScript | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const startScript = (script: SocialScript) => {
    setActiveScript(script);
    setStepIndex(0);
    mluv(script.steps[0].label);
  };

  const nextStep = () => {
    if (!activeScript) return;
    const nextIdx = stepIndex + 1;
    if (nextIdx < activeScript.steps.length) {
      setStepIndex(nextIdx);
      mluv(activeScript.steps[nextIdx].label);
    } else {
      setActiveScript(null);
    }
  };

  return (
    <div style={overlay}>
      <div style={container}>
        {!activeScript ? (
          <>
            <h2 style={title}>SOCIÁLNÍ PŘÍBĚHY</h2>
            <div style={scriptGrid}>
              {SCRIPTS.map(s => (
                <button key={s.id} onClick={() => startScript(s)} style={scriptBtn}>
                  {s.title}
                </button>
              ))}
            </div>
            <button onClick={onClose} style={closeBtn}>ZAVŘÍT</button>
          </>
        ) : (
          <div style={activeView}>
            <h3 style={scriptTitle}>{activeScript.title}</h3>
            <div style={stepView}>
              <img src={activeScript.steps[stepIndex].image} alt="" style={stepImg} />
              <p style={stepLabel}>{activeScript.steps[stepIndex].label}</p>
            </div>
            <div style={controls}>
              <button onClick={() => setActiveScript(null)} style={cancelBtn}>ZRUŠIT</button>
              <button onClick={nextStep} style={nextBtn}>
                {stepIndex === activeScript.steps.length - 1 ? 'HOTOVO' : 'DALŠÍ'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 5000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' };
const container: React.CSSProperties = { background: '#1A1A1A', padding: '30px', borderRadius: '25px', width: '100%', maxWidth: '400px', textAlign: 'center', color: 'white' };
const title: React.CSSProperties = { color: '#e95420', marginBottom: '20px' };
const scriptGrid: React.CSSProperties = { display: 'grid', gap: '15px', marginBottom: '30px' };
const scriptBtn: React.CSSProperties = { padding: '20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '15px', color: 'white', fontWeight: 'bold', cursor: 'pointer' };
const closeBtn: React.CSSProperties = { padding: '15px 30px', background: '#444', border: 'none', borderRadius: '10px', color: 'white', cursor: 'pointer' };

const activeView: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
const scriptTitle: React.CSSProperties = { fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' };
const stepView: React.CSSProperties = { marginBottom: '30px' };
const stepImg: React.CSSProperties = { width: '200px', height: '200px', background: 'white', padding: '10px', borderRadius: '20px' };
const stepLabel: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' };
const controls: React.CSSProperties = { display: 'flex', gap: '15px', width: '100%' };
const cancelBtn: React.CSSProperties = { flex: 1, padding: '15px', background: '#C0392B', border: 'none', borderRadius: '10px', color: 'white', fontWeight: 'bold' };
const nextBtn: React.CSSProperties = { flex: 2, padding: '15px', background: '#27AE60', border: 'none', borderRadius: '10px', color: 'white', fontWeight: 'bold' };
