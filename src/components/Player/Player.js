import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css'

const Player = (props) => {
    // console.log(props)
    const {name,image,country,email,club,salary}=props.player;
   const handleSelectPlayerNow=props.handleSelectPlayer;
    // console.log(handleSelectPlayerNow);
    return (
        <div className='player-info'>
            <div>
            <img src={image} alt=""/>
            </div>
            <div className='player-name'>
            <h1>Name:{name} </h1>
            <h2>Country: {country}</h2>
            <h3>Club Name:{club}</h3>
            <h4>E-mail: {email}</h4>
            <h5>Salary: {salary}</h5>
            <br/>
            <button className='select-button btn btn-success ' onClick={()=>handleSelectPlayerNow(props.player)}><FontAwesomeIcon icon={faUserPlus} />
                Select</button>
            </div>
          
            
            
        </div>
    );
};

export default Player;