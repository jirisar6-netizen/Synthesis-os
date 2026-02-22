let hlasy: SpeechSynthesisVoice[] = [];

// Chrome vyžaduje asynchronní načtení seznamu hlasů
const nactiHlasy = () => {
  hlasy = window.speechSynthesis.getVoices();
};

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = nactiHlasy;
  nactiHlasy();
}

/**
 * Robustní funkce pro mluvení optimalizovaná pro Chrome.
 * Limit 60 řádků dodržen.
 */
export const mluv = (text: string) => {
  if (!('speechSynthesis' in window)) return;

  // Zrušení rozmluvené fronty (okamžitá reakce na klik)
  window.speechSynthesis.cancel();

  const promluva = new SpeechSynthesisUtterance(text);
  
  // Najdeme český hlas, prioritně ten od Google (v Chrome zní nejlépe)
  const ceskyHlas = hlasy.find(h => h.lang.includes('cs-CZ') && h.name.includes('Google')) 
                 || hlasy.find(h => h.lang.includes('cs-CZ'));

  if (ceskyHlas) {
    promluva.voice = ceskyHlas;
  }

  promluva.lang = 'cs-CZ';
  promluva.rate = 0.9;  // Mírně pomalejší pro srozumitelnost dětem
  promluva.pitch = 1.0; // Přirozená výška hlasu

  window.speechSynthesis.speak(promluva);
};

export const odemkniAudio = () => {
  if (!('speechSynthesis' in window)) return;
  // Prázdná promluva pro "probuzení" Chrome audio kontextu
  const ut = new SpeechSynthesisUtterance('');
  window.speechSynthesis.speak(ut);
};
