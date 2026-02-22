import React from 'react';

export const gridResponzivniStyle: React.CSSProperties = {
  display: 'grid',
  // Na mobilu 2 sloupce, na tabletu 4, na PC až 6
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '12px',
  padding: '10px',
  width: '100%',
  maxWidth: '1200px', // Prevence přílišného roztažení na TV/Monitoru
  margin: '0 auto'
};
