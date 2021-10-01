import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import playerData from './data/data.json';

function App() {
   const [countries, setCountries] = useState([]);
   const [cart, setCart] = useState([]);
   const [player, setPlayer] = useState([]);
   useEffect(() =>{
      setPlayer(playerData);
      console.log(playerData);
   }, [])

      const handleAddPlayer = (playerList) => {
     const newCart = [...cart, playerList];
     setCart(newCart);
    }

  return (
    <div className="App">
      {<h1>Add your favourite player to the team!</h1>}
      {/* <h1>toatl country: {countries.length} :D</h1> */}
      <h4>Total Player Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
        player.map( item=> <Player playerList={item} handleAddPlayer={handleAddPlayer} key={item.id}></Player>)
      }

    </div>
  );
}

export default App;
