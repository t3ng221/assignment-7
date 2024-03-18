import React from 'react';

const GoodPlayers = (props) => {
    const cart=props.cart
    // console.log(props)
    let totalSalary=cart.reduce((totalSalary,gplayer)=>totalSalary+Number(gplayer.salary),0)
    // let selectName=cart.reduce((selectName,pname)=>pname.name," ");
    // const newSelectedName=[...selectName]
    // console.log(props)

    return (
        <div>
            <h1>Good Player Summary</h1>
            <h3>Selected Players:{cart.length} </h3>
            
             <p>TotalSalary:{totalSalary.toFixed(2)} </p>
            
        </div>
    );
};

export default GoodPlayers;