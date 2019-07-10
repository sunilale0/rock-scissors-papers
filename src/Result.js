import React from 'react'

const result =(props) => {
    const style = {
        border: '1px solid white',
        marginBottom: '20px',
        textAlign: 'center',
        padding: '20px'
    }

    const scissors = "http://i.imgur.com/pgjyhIZ.png";
    const rock = "http://i.imgur.com/LghSkIw.png";
    const paper = "http://i.imgur.com/2gsdqvR.png";

    const results = props.outcome.toUpperCase();
    const resultOne = props.player1;
    const resultTwo = props.player2;

    const whoWins = (pass) =>{
        if(pass === 'PLAYER1') return 'Player 1 wins!';
        if(pass === 'PLAYER2') return 'Player 2 wins!';
        if(pass === 'DRAW!') return 'It is a draw!'
    }


    const display = (pass) =>{
        let answer;
        if(pass === 'rock') answer = rock;
        if(pass === 'scissors') answer = scissors;
        if(pass === 'paper') answer = paper;
        return answer;
    }

    
    return(
        <div style = {style}>
        <h1>
            Result<br/>
        </h1>
        <img src ={display(resultOne)} alt={results}/> ====== <img src={display(resultTwo)} alt={results}/>
        <hr/>
        {whoWins(results)}
        </div>
    )
}

export default result;