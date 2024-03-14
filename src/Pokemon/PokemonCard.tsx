import React, {useRef, useState} from 'react';
import pokemon from "../data/Pokemon.json";
import styles from './PokemonCard.module.css';
import Attack from '../Player/Attack';

const PokemonCard = (props) => {
    const selectedPokemon = pokemon.filter(p => p.name === props.selected)[0]; 
    

    return (
        <div className={styles.description}>
            <div className={styles.allDescription}>
                <p>Type: {selectedPokemon.type} </p>
                <p>Defense HP: {selectedPokemon.defenseHP}</p>
                <p>Attack HP: {selectedPokemon.attackHP}</p>
                <p>Legend: {selectedPokemon.legend ? "Yes" : "No"}</p>
            </div>
        </div>
    );
};

export default PokemonCard;