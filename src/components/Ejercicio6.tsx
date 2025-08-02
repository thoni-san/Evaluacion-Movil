import React, { type CSSProperties } from 'react';

export const Ejercicio5: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    display: 'flex',
    columnGap: '10px'
  };
  const col = (bg: string): CSSProperties => ({
    flex: 1,
    backgroundColor: bg
  });

  return (
    <div style={container}>
      <div style={col('#6C5DD3')} />
      <div style={col('#F29E4C')} />
      <div style={col('#3FC1C9')} />
    </div>
  );
};
