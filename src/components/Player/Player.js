import React from 'react';

const Player = (props) => {
    const {playerList, handleAddPlayer} = props;
    const flagStyle = {height:'200px', width:'300'}
    const countryStyle = {border: '1px solid black', margin:'10px', padding:'10px'}

    return (
        <div style={countryStyle}>
            <h2> {playerList.name}</h2>
            <img style={flagStyle} src={playerList.image} alt=""/>
            <p>Salary : {playerList.salary} BDT</p>
            <button onClick={() => handleAddPlayer(playerList)}>Add Player </button>
        </div>
    );
};

export default Player;