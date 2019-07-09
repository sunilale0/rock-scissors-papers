import React from 'react';


const scoreBoard = (props) =>{

    let score = 0;
    score = score+ props.scored;


    const style={
        padding: '10px',
        margin: '20px',
        border: '1px solid white'
    }
    return(
        <div style={style}>
            Player: {props.user}
            <br/>Score: {score} 
        </div>
    )
}


export default scoreBoard;