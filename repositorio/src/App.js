import React from 'react';
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/02MeuPC';
import { Hero as BatalhaHero, Enemy as BatalhaEnemy, Arena as BatalhaArena, World as BatalhaWorld } from './components/atividade01/03Batalha';

// Importando as imagens
import heroImage from './components/atividade01/assets/hero.jpg';
import enemyImage from './components/atividade01/assets/enemy.jpeg';

function App() {
  return (
    <div className="App">
      {/* Componentes da segunda questão */}
      <PCPlacaMae nome="Placa-mãe XYZ" preco="500.00" />
      <PCMemoria nome="Memória DDR4" preco="200.00" />
      <PCPlacaDeVideo nome="Placa de Vídeo GTX 1080" preco="800.00" />

      {/* Componentes da terceira questão */}
      <BatalhaWorld>
        <BatalhaArena>
          {/* Passando as imagens como props */}
          <BatalhaHero name="supermen" img={heroImage} />
          <BatalhaEnemy name="tictoker" img={enemyImage} />
        </BatalhaArena>
        <BatalhaArena>
          <BatalhaHero name="supermen_Alternativo" img={heroImage} />
          <BatalhaEnemy name="tictoker de Tal" img={enemyImage} />
        </BatalhaArena>
      </BatalhaWorld>
    </div>
  );
}

export default App;
