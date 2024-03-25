import React, { createContext, useContext, useState } from 'react';
import ComponentePai from './ComponentePai';

const NumeroContext = createContext();

const ComponenteAvo = () => {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(1);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
    setNumero(prevNumero => prevNumero + 1);
  };

  return (
    <NumeroContext.Provider value={{ contador, setContador, numero }}> {/* Incluindo "numero" no valor do contexto */}
      <div>
        <h2>Componente Avo</h2>
        <p>Contador: {contador}</p>
        <p>Numero: {numero}</p> 
        <button onClick={incrementarContador}>Incrementar</button>
        <ComponentePai />
      </div>
    </NumeroContext.Provider>
  );
};

export default ComponenteAvo;
export { NumeroContext };
