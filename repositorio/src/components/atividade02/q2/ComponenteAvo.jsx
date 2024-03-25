import React, { createContext, useContext, useState } from 'react';
import ComponentePai from './ComponentePai';

const NumeroContext = createContext();

const ComponenteAvo = () => {
  const [numero, setNumero] = useState(1);

  return (
    <NumeroContext.Provider value={{ numero }}>
      <div>
        <h2>Componente Avo</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt={`Pokemon ${numero}`} />
        <ComponentePai />
      </div>
    </NumeroContext.Provider>
  );
};

export default ComponenteAvo;
export { NumeroContext };
