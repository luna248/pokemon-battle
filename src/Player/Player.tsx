import React from 'react';
import {getImageUrl} from './../utils.ts';
import styles from './Player.module.css';
import player1 from '../assets/player1.png';


const Player = (props) => {
    return (
    <div className={styles.imageContainer}>
        <div className={styles.playerImage}>
            <img src={props.source} alt={props.name} />
        </div>
        <p>{props.name}</p>
    </div>
    );
};

export default Player;
