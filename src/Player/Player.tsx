import React from 'react';
//@ts-ignore
import styles from './Player.module.css';

interface PlayerProps {
    source: string;
    name: string;
}

const Player: React.FC<PlayerProps> = (props) => {
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
