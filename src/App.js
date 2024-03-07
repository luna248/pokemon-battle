import Player from './Player/Player.tsx'
import styles from './App.module.css';
import player1 from './assets/player1.png';
import player2 from './assets/player2.png';
import PokemonSelector from './Pokemon/PokemonSelector.tsx';
import Attack from './Pokemon/Attack.tsx';

function App() {
  return (
    <div className="App">
      <div className={styles.Player1}>
        <div className={styles.Player1Img}> 
          <Player source={player1} name={"Player 1"}></Player>
        </div>
        <div className={styles.PokemonSelector}>
          <PokemonSelector></PokemonSelector>
        </div>
      </div>
      <div className={styles.Player2}>
        <div className={styles.Player2Img}> 
          <Player source={player2} name={"Player 2"}></Player>
        </div>
        <div className={styles.PokemonSelector}>
          <PokemonSelector></PokemonSelector>
        </div>
        
      </div>
    </div>
  );
}

export default App;

/**
 * 
 * 
 */