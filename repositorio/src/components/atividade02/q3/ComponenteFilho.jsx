import React, { useContext } from 'react';
import { NumeroContext } from './ComponenteAvo';

const ComponenteFilho = () => {
  const { numero } = useContext(NumeroContext);

  console.log("Valor de numero no filho:", numero);

  return (
    <div>
      <h2>Componente Filho</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt={`Pokemon ${numero}`} />
    </div>
  );
};

export default ComponenteFilho;
