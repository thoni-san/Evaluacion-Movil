import React, { type CSSProperties } from 'react';

const BOX = 40; 

export const Ejercicio3: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    display: 'flex',
    alignItems: 'center'
  };
  const spacer: CSSProperties = { flex: 1 };
  const box = (bg: string): CSSProperties => ({
    width: BOX,
    height: BOX,
    backgroundColor: bg
  });

  return (
    <div style={container}>
      <div style={spacer} />
      <div style={box('#F29E4C')} />
      <div style={spacer} />
      <div style={box('#6C5DD3')} />
    </div>
  );
};