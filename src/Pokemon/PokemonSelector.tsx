import React, { useState, useRef } from 'react';
import styles from './PokemonSelector.module.css';
import pokemonOptions from './Pokemon';
import PokemonCard from './PokemonCard';
import Attack from '../Player/Attack';

interface Option {
  value: string;
  label: string;
}

const PokemonSelector = (props : any) => {
  const [optionPicked, setOptionPicked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Option | null>(null);
  const defenseHPRef = useRef(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = pokemonOptions.find((option: { value: string; }) => option.value === selectedValue);
    setSelectedPokemon(option || null);
    setOptionPicked(!!option);

    console.log(props.value, " picked")
    console.log(option)
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.pokemonSelect}
        value={selectedPokemon?.value || ''}
        onChange={handleSelectChange}
      >
        <option value="" disabled hidden>Pick a Pokemon</option>
        {pokemonOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      <div className={styles.pokemonCard}>
        {optionPicked && <PokemonCard player={props.value} selected={selectedPokemon?.value} />}
      </div>

    </div>
  );
};

export default PokemonSelector;
