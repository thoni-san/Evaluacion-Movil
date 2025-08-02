import React, { type CSSProperties } from 'react';

export const Ejercicio6: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044'
  };
  const strip = (bg: string, h: string): CSSProperties => ({
    width: '100%',
    height: h,
    backgroundColor: bg,
    marginBottom: '5px'
  });

  return (
    <div style={container}>
      <div style={strip('#6C5DD3', '15%')} />
      <div style={strip('#F29E4C', '20%')} />
      <div style={strip('#3FC1C9', '35%')} />
    </div>
  );
};