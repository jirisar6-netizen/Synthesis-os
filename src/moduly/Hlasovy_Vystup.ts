export const mluv = (text: string) => {
  if ('speechSynthesis' in window) {
    // Zastavit předchozí řeč pro okamžitou odezvu
    window.speechSynthesis.cancel();
    const promluva = new SpeechSynthesisUtterance(text);
    promluva.lang = 'cs-CZ';
    promluva.rate = 0.9; // Mírně pomalejší pro lepší srozumitelnost
    window.speechSynthesis.speak(promluva);
  }
};
