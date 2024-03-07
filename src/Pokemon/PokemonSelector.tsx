import React, {useState} from 'react';
import styles from './PokemonSelector.module.css';
import pokemonOptions from './Pokemon.ts';
import Select from 'react-select'
import PokemonCard from './PokemonCard.tsx';
import Attack from './Attack.tsx';

const PokemonSelector = () => {
    const [optionPicked, setOptionPicked] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState({value: "none" , label: "none"});

    function updateSelected(selected){
        // if(selected != null){
        //     setOptionPicked(true)
        //     setSelectedPokemon(selected)
        // } else {
        //     setOptionPicked(false)
        //     setSelectedPokemon({value: "none" , label: "none"})
        // }
    }

    return (
        <div className={styles.selectContainer}>
            <Select 
                options={pokemonOptions}
                className={styles.pokemonSelect}
                placeholder = {"Pick a Pokemon"}
                getOptionLabel={option => option.label}
                getOptionValue={option => option.value}
                onChange={selected => updateSelected(selected)}
                isClearable
            />
            <div className={styles.pokemonCard}>
                {optionPicked && <PokemonCard selected={selectedPokemon.value}/>}
                {optionPicked && <Attack/>}
            </div>
        </div>
    );
};

export default PokemonSelector;