import React, { type CSSProperties } from 'react';

const BOX = 40;

export const Ejercicio7: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const stack: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: BOX * 3 + 20,
  };
  const boxStyle = (bg: string): CSSProperties => ({
    width: BOX,
    height: BOX,
    backgroundColor: bg,
  });

  return (
    <div style={container}>
      <div style={stack}>
        <div style={boxStyle('#6C5DD3')} />
        <div style={boxStyle('#F29E4C')} />
        <div style={boxStyle('#3FC1C9')} />
      </div>
    </div>
  );
};
