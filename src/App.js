import {useRef} from 'react'
import Player from './Player/Player.tsx'
import styles from './App.module.css';
import player1 from './assets/player1.png';
import player2 from './assets/player2.png';
import PokemonSelector from './Pokemon/PokemonSelector.tsx';

function App() {
  const defenseHPRef1 = useRef(null);
  const totalHPRef1 = useRef(null);

  const defenseHPRef2 = useRef(null);
  const totalHPRef2 = useRef(null);

  return (
    <div className="App">
      <div className={styles.Player1}>
        <div className={styles.Player1Img}> 
          <Player source={player1} name={"Player 1"}></Player>
        </div>
        <div className={styles.PokemonSelector}>
        <PokemonSelector defenseHPRef={defenseHPRef1} totalHPRef1={totalHPRef1}></PokemonSelector>
        </div>
      </div>
      <div className={styles.Player2}>
        <div className={styles.Player2Img}> 
          <Player source={player2} name={"Player 2"}></Player>
        </div>
        <div className={styles.PokemonSelector}>
          <PokemonSelector defenseHPRef={defenseHPRef2} totalHPRef={totalHPRef2}></PokemonSelector>
        </div>
        
      </div>
    </div>
  );
}

export default App;