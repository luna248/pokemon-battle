import React, {useRef} from 'react';
import pokemon from "../data/Pokemon.json";
import styles from './PokemonCard.module.css';

const PokemonCard = (props) => {
    const selectedPokemon = pokemon.filter(p => p.name === props.selected)[0]; 
    const defenseHPRef = useRef(null);
    const attackHPRef = useRef(null);
    const totalHP = useRef(null);

    const logAttackHP = () => {
        if (attackHPRef.current) {
            console.log(props.player, "Defense HP:", defenseHPRef.current.innerText);
            console.log(props.player, "Attack HP:", attackHPRef.current.innerText);
            console.log(props.player, "Total HP: ", totalHP.current.innerText)
        }
    };

    return (
        <div className={styles.description}>
            <div className={styles.allDescription}>
                <p>Type: {selectedPokemon.type} </p>
                <p ref={defenseHPRef}>Defense HP: {selectedPokemon.defenseHP}</p>
                <p ref={attackHPRef}>Attack HP: {selectedPokemon.attackHP}</p>
                <p>Legend: {selectedPokemon.legend ? "Yes" : "No"}</p>
            </div>

            <div className={styles.HPDescription}>
                <p ref={totalHP}>Total HP: {selectedPokemon.HP}</p>
            </div>

            <div className={styles.attackButton}>
                <button onClick={logAttackHP}>Log Attack HP</button>
            </div>
        </div>
    );
};

export default PokemonCard;