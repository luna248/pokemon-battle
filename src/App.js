import React, { useState, useEffect } from 'react';
import Player from './Player/Player.tsx';
import styles from './App.module.css';
import player1 from './assets/player1.png';
import player2 from './assets/player2.png';
import PokemonSelector from './Pokemon/PokemonSelector.tsx';
import Attack from './Player/Attack.tsx'
import pokemon from "./data/Pokemon.json";

function App() {
  const [player1Data, setPlayer1Data] = useState(null)
  const[player1RemainingHP, setPlayer1RemainingHP] = useState(0)

  const [player2Data, setPlayer2Data] = useState(null)
  const[player2RemainingHP, setPlayer2RemainingHP] = useState(0)

  const handlePlayer1Data = (data) => {
    setPlayer1Data(pokemon.filter(p => p.name === data.value));
    setPlayer1RemainingHP(pokemon.filter(p => p.name === data.value)[0].HP);
  };

  const handlePlayer2Data = (data) => {
    setPlayer2Data(pokemon.filter(p => p.name === data.value))
    setPlayer2RemainingHP(pokemon.filter(p => p.name === data.value)[0].HP);
  }

  const handlePlayer1RemainingHP = (data) => {
    setPlayer1RemainingHP(data)
  }

  const handlePlayer2RemainingHP = (data) => {
    console.log("P2RHP", data)
    setPlayer2RemainingHP(data)
  }

  return (
    <div className="App">
      <div className={styles.Player1}>
        <div className={styles.Player1Img}>
          <Player source={player1} name={'Player 1'}></Player>
        </div>
        <div className={styles.PokemonSelector}>
          <PokemonSelector
            name="player1"
            updatePlayer={handlePlayer1Data}
          ></PokemonSelector>
          { player1Data!=null ?
            <div className={styles.HPDescription}>
                <p>Total HP: {player1RemainingHP}</p>
            </div> :
            null
          }
          { player1Data!=null && player2Data!=null ? 
              <Attack
                defenseHP={player2Data[0].defenseHP}
                attackHP={player1Data[0].attackHP}
                totalHP={player2RemainingHP}
                updateRemainingHP={handlePlayer2RemainingHP}
              /> 
            : null }
            {
              player1Data!=null && player2Data!=null && player2RemainingHP <= 0 ? (
                <p>"Player 1 wins!"</p>
              ) : null
            }
        </div>
      </div>
      <div className={styles.Player2}>
        <div className={styles.Player2Img}>
          <Player source={player2} name={'Player 2'}></Player>
        </div>
        <div className={styles.PokemonSelector}>
          <PokemonSelector
            name="player2"
            updatePlayer={handlePlayer2Data}
          ></PokemonSelector>
          { player2Data!=null ?
            <div className={styles.HPDescription}>
                  <p>Total HP: {player2RemainingHP}</p>
            </div> :
            null
          }
          { player1Data!=null && player2Data!=null ? 
            <Attack
              defenseHP={player1Data[0].defenseHP}
              attackHP={player2Data[0].attackHP}
              totalHP={player1RemainingHP}
              updateRemainingHP={handlePlayer1RemainingHP}
            /> 
            : null }
            {
              player1Data!=null && player2Data!=null && player1RemainingHP <= 0 ? (
                <p>"Player 2 wins!"</p>
              ) : null
            }
        </div>
      </div>
    </div>
  );
}

export default App;
