import React from 'react';

export const Paticka_Systemu: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    marginTop: 'auto',
    padding: '20px 10px',
    textAlign: 'center',
    borderTop: '1px solid rgba(233, 84, 32, 0.3)',
    background: 'rgba(48, 10, 36, 0.9)', // Ubuntu Purple
    color: '#ffffff',
    fontSize: '0.85rem',
    lineHeight: '1.5'
  };

  const highlightStyle: React.CSSProperties = {
    color: '#e95420', // Ubuntu Orange
    fontWeight: 'bold'
  };

  const subStyle: React.CSSProperties = {
    opacity: 0.7,
    fontSize: '0.75rem',
    marginTop: '10px'
  };

  return (
    <footer style={footerStyle}>
      <p>Vyrobil <span style={highlightStyle}>Jiří Šár</span> pro <span style={highlightStyle}>malého Daniela</span> a také pro všechny děti.</p>
      <p style={subStyle}>
        Navrženo podle mezinárodních standardů AAC a definic pro autisty určených profesionály.
      </p>
    </footer>
  );
};
