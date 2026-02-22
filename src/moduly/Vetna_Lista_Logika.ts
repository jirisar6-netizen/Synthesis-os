import React from 'react';
import { CardData } from './Arasaac_API_Mustek';
import { mluv } from './Hlasovy_Vystup';

export const prehrajVetu = (karty: CardData[]) => {
  const textVety = karty.map(k => k.label).join(' ');
  mluv(textVety);
};

export const stylListy: React.CSSProperties = {
  minHeight: '100px',
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(15px)',
  borderRadius: '15px',
  margin: '10px',
  display: 'flex',
  gap: '10px',
  padding: '10px',
  overflowX: 'auto',
  border: '2px dashed #e95420'
};
