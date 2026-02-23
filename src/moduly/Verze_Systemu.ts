import React from 'react';

export const SYSTEM_VERSION = "B0.1.15";
export const POSLEDNI_AKTUALIZACE = "2026-02-23";

export const verzeStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '5px',
  right: '10px',
  fontSize: '0.65rem',
  color: 'rgba(233, 84, 32, 0.6)', // Ubuntu Orange s průhledností
  fontFamily: 'monospace',
  zIndex: 9999,
  pointerEvents: 'none' // Aby nebránilo klikání na prvky pod ním
};
