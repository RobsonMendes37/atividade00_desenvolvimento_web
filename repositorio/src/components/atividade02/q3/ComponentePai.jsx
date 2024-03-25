import React from 'react';
import ComponenteFilho from './ComponenteFilho';


const ComponentePai = () => {
  return (
    <div>
      <h2>Componente Pai</h2>
      <ComponenteFilho />
    </div>
  );
};

export default ComponentePai;
