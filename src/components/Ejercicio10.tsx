import React, { type CSSProperties } from 'react';

const BOX = 40; 
const GAP = 20; 

export const Ejercicio9: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const boxBase: CSSProperties = {
    width: BOX,
    height: BOX,
    margin: `0 ${GAP / 2}px`,
  };
  const purple: CSSProperties = { ...boxBase, backgroundColor: '#6C5DD3' };
  const orange: CSSProperties = {
    ...boxBase,
    backgroundColor: '#F29E4C',
    marginTop: BOX / 2,
  };
  const cyan: CSSProperties = { ...boxBase, backgroundColor: '#3FC1C9' };

  return (
    <div style={container}>
      <div style={purple} />
      <div style={orange} />
      <div style={cyan} />
    </div>
  );
};
