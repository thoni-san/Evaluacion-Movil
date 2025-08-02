import React, { type CSSProperties } from 'react';

const COL_W = 50; 
const BOX = 40;   

export const Ejercicio2: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    display: 'flex',
    alignItems: 'center'
  };
  const spacer: CSSProperties = { flex: 1 };
  const column: CSSProperties = {
    width: COL_W,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '10px',
    padding: '20px 0'
  };

  const box = (bg: string, w = BOX, h = BOX): CSSProperties => ({
    width: w,
    height: h,
    backgroundColor: bg
  });

  return (
    <div style={container}>
      <div style={spacer} />
      <div style={column}>
        <div style={box('#6C5DD3')} />
        <div style={box('#F29E4C')} />
        <div style={box('#3FC1C9', COL_W * 3, BOX)} />
      </div>
      <div style={spacer} />
    </div>
  );
};