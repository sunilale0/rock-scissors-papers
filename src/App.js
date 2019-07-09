import React, {Component} from 'react';
import Options from './Options';
import ScoreBoard from './ScoreBoard';
import Result from './Result';

class App extends Component{
  state = {
      outcome: 'first',
      score1: 0,
      score2: 0,
      firstPlayer: true
    }


  valueAssignment = (res) =>{
    switch(res){
      case 0: return 'rock'
      case 1: return 'scissors'
      case 2: return 'paper'
      default: return null
    }
  }

  theGame=()=>{
    const res1 = this.valueAssignment(Math.floor(Math.random()*3));
    console.log('[App.js] theGame for Player 1: ' + res1)
    const res2 = this.valueAssignment(Math.floor(Math.random()*3));
    console.log('[App.js] theGame for Player 2: ' + res2)
    return this.gameResult(res1, res2);
  }

  gameResult =(gameResult, prevGameResult) =>{
    if((gameResult === 'paper' && prevGameResult === 'paper') 
    || (gameResult === 'scissors' && prevGameResult === 'scissors')
    || (gameResult === 'rock' && prevGameResult === 'rock'))
      return 'draw!'
    else if(gameResult === 'rock' && prevGameResult === 'paper')
      return 'player1'
    else if(gameResult === 'paper' && prevGameResult === 'rock')
      return 'player2'
    else if(gameResult === 'scissors' && prevGameResult === 'paper')
      return 'player1'
    else if(gameResult === 'paper' && prevGameResult === 'scissors')
      return 'player2'
    else if(gameResult === 'rock' && prevGameResult === 'scissors')
      return 'player1'
    else if(gameResult === 'scissors' && prevGameResult === 'rock')
      return 'player2'
  }

  didScore = (props) =>{
   if(this.state.firstPlayer){
     return 1;
   }
   this.setState({
     firstPlayer: !this.state.firstPlayer
   })
  }

  startGame=(event)=>{
    console.log('[App.js] startGame ' + event.target.value);
    let result = this.theGame();
    console.log('[App.js] startGame ' + result )
    let player1Score = this.state.score1, player2Score = this.state.score2;
    if(result === 'player1') player1Score++
    else if(result === 'player2') player2Score++;
    this.setState({
      outcome: result,
      score1: player1Score,
      score2: player2Score
    }) 
  }

  render(){
    
    return(
      <div>
        <h1>Rock Scissors Paper</h1>
        <hr/>
        <Options name='Rock'/>
        <Options name='Scissors'/>
        <Options name='Paper'/>
        <hr/>
        <ScoreBoard 
        user='Player1' 
        scored={this.state.score1} />
        <ScoreBoard 
        user='Player2' 
        scored={this.state.score2} />
        
        <button onClick={this.startGame} value='button value'>Play the Game</button>
        <div>
        </div>
        <Result outcome={this.state.outcome}/>
      
      </div>
    )
  }

}

export default App;