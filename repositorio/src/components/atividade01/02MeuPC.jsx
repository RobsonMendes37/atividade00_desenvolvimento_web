import React from 'react';

const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
}

export { PlacaMae, Memoria, PlacaDeVideo };
