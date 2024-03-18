import React, { useState } from 'react';
import Data from '../../../Data/Data.json'
import GoodPlayers from '../../goodPlayers/GoodPlayers';
import Player from '../../Player/Player';
import './PlayerList.css'

const PlayerList = () => {
    console.log(Data)
     const [players,setPlayers]=useState(Data)
     const [cart,setCart]=useState([])
     const handleSelectPlayer=(goodPlayer)=>{
         console.log("clicked",goodPlayer)
         const newCart=[...cart,goodPlayer]
         setCart(newCart)
         console.log(newCart)
     }
   
    return (
        <div className='player-list'>
           <div className='player-details' >
               <h1>Player list</h1>
               {
                   players.map((ply)=> <Player player={ply} handleSelectPlayer={handleSelectPlayer}></Player>)
               }
           </div>
           <div className='player-cart'>
              <GoodPlayers cart={cart}></GoodPlayers>
           </div>
        </div>
    );
};

export default PlayerList;