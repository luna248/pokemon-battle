import React from 'react';

const Attack = (props) => {
    const calculateAttack = () => {
        console.log("attack: " , props.attackHP);
        console.log("defense: ", props.defenseHP);
        console.log("Total: ", props.totalHP);

        const damage = props.totalHP - (props.attackHP-props.defenseHP)
        props.updateRemainingHP(damage)
    }



    return (
        <div>
            <button onClick={calculateAttack}>Log Attack HP</button>
        </div>
    );
};

export default Attack;
