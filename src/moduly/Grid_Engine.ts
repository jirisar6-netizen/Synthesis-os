import React from 'react';

export const getGridStyles = (cols: number): React.CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, 1fr)`,
  gap: cols > 3 ? '8px' : '20px', // Čím víc karet, tím menší mezery
  padding: '15px'
});
