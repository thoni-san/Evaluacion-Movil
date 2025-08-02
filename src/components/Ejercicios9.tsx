import React, { type CSSProperties } from 'react';

const BOX = 40;

export const Ejercicio8: React.FC = () => {
  const container: CSSProperties = {
    width: '90vw',
    height: '60vh',
    backgroundColor: '#233044',
    position: 'relative',
  };
  const boxBase: CSSProperties = {
    width: BOX,
    height: BOX,
    position: 'absolute',
  };
  const placements: Array<{ top: string; left: string; bg: string }> = [
    { top: '25%', left: '40%', bg: '#6C5DD3' },
    { top: '45%', left: '55%', bg: '#F29E4C' },
    { top: '65%', left: '40%', bg: '#3FC1C9' },
  ];

  return (
    <div style={container}>
      {placements.map((p, i) => (
        <div
          key={i}
          style={{ ...boxBase, top: p.top, left: p.left, backgroundColor: p.bg }}
        />
      ))}
    </div>
  );
};
