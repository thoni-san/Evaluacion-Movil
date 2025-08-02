import React, { type CSSProperties } from 'react';

const BOX = 40;

export const Ejercicio4: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };
  const spacer: CSSProperties = { flex: 1 };
  const box = (bg: string): CSSProperties => ({
    width: BOX,
    height: BOX,
    backgroundColor: bg
  });
  const centered: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: BOX,
    height: BOX,
    marginLeft: -BOX/2,
    marginTop: -BOX/2,
    backgroundColor: '#F29E4C'
  };

  return (
    <div style={container}>
      <div style={box('#6C5DD3')} />
      <div style={spacer} />
      <div style={centered} />
      <div style={spacer} />
      <div style={box('#3FC1C9')} />
    </div>
  );
};