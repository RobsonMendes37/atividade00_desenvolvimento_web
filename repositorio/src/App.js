// import React from 'react';
// import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/02MeuPC';
// import { Hero as BatalhaHero, Enemy as BatalhaEnemy, Arena as BatalhaArena, World as BatalhaWorld } from './components/atividade01/03Batalha';

// // Importando as imagens
// import heroImage from './components/atividade01/assets/hero.jpg';
// import enemyImage from './components/atividade01/assets/enemy.jpeg';

// // Estilos CSS para as imagens
// const imageStyle = {
//   width: '400px',
//   height: '400px',
//   margin: '10px', 
// };

// function App() {
//   return (
//     <div className="App">
//       {/* Componentes da segunda questão */}
//       <PCPlacaMae nome="Placa-mãe XYZ" preco="500.00" />
//       <PCMemoria nome="Memória DDR4" preco="200.00" />
//       <PCPlacaDeVideo nome="Placa de Vídeo GTX 1080" preco="800.00" />

//       {/* Componentes da terceira questão */}
//       <BatalhaWorld>
//         <BatalhaArena>
//           {/* Passando as imagens como props */}
//           <img src={heroImage} alt="Hero" style={imageStyle} />
//           <img src={enemyImage} alt="Enemy" style={imageStyle} />
//         </BatalhaArena>
//         <BatalhaArena>
//           <img src={heroImage} alt="Hero" style={imageStyle} />
//           <img src={enemyImage} alt="Enemy" style={imageStyle} />
//         </BatalhaArena>
//       </BatalhaWorld>
//     </div>
//   );
// }

// export default App;



//-------------------Atividade02_q1---------------------

// import React from "react";
// import ClassA from "./components/atividade02/q1/ClassContext";
// import FunctionContextA from "./components/atividade02/q1/FunctionContextA";

// function App() {
//   return (
//     <div className="App">
//       <h1>Exemplo de Contexto em React</h1>
//       <h2>Componentes de Classe:</h2>
//       <ClassA />
//       <hr />
//       <h2>Componentes de Função:</h2>
//       <FunctionContextA />
//     </div>
//   );
// }

// export default App;

//                    ---- q2----

// import React from 'react';
// import ComponenteAvo from './components/atividade02/q2/ComponenteAvo.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1>App Pokemon</h1>
//       <ComponenteAvo />
//     </div>
//   );
// };

// export default App;

//                   ----q3----

import React from 'react';
import ComponenteAvo from './components/atividade02/q3/ComponenteAvo';

const App = () => {
  return (
    <div>
      <h1>App Pokemon</h1>
      <ComponenteAvo />
    </div>
  );
};

export default App;
