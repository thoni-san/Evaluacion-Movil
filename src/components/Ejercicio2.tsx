import React, { type CSSProperties } from 'react';

const SIDEBAR_W = 50; 
const BOX_H = 40;    

export const Ejercicio1: React.FC = () => {
  const container: CSSProperties = {
    display: 'flex',
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
  };

  const sidebar: CSSProperties = {
    width: SIDEBAR_W,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 0',
    backgroundColor: '#233044',
  };

  const main: CSSProperties = {
    flex: 1,
    backgroundColor: '#233044',
  };

  const box = (bg: string, width = SIDEBAR_W, height = BOX_H, flexGrow = 0): CSSProperties => ({
    width,
    height,
    backgroundColor: bg,
    flexGrow,
  });

  return (
    <div style={container}>
      <div style={sidebar}>
        <div style={box('#6C5DD3')} />
        <div style={box('#F29E4C', SIDEBAR_W, BOX_H, 1)} />
        <div style={box('#3FC1C9')} />
      </div>
      <div style={main} />
    </div>
  );
};
