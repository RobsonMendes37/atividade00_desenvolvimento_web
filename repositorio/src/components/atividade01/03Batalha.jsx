import React from 'react';

const Hero = ({ name, img }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const Enemy = ({ name, img }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const Arena = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

const World = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export { Hero, Enemy, Arena, World };
