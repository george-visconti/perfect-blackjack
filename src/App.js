// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {handSetUp, Options} from './utils'

function Card({cardObj,faceDown=false}){

  if (faceDown) {
    return (
      <img
        src={"/perfect-blackjack/Blue_Back.svg"}
        alt="card"
      />
    )

  }
  const url = "/perfect-blackjack/" + cardObj.value + cardObj.suite + ".svg";
  return (
    <img 
      src={url} 
      alt="card" />
  )
}

function App() {

  const [handObj, setHandObj] = useState(handSetUp())
  const [showNextButton, setShowNextButton] = useState(false);

  function handleClick(decision){
    if (decision === handObj.answer){
      alert("You were right!");
    } else {
      alert(`That is wrong. The correct answer was to ${handObj.answer}`)
    }
    setShowNextButton(true);
  }

  function newHand() {
    setHandObj(handSetUp());
    setShowNextButton(false);
  }

  return (

    <div className="App">
      <div className='dealers-cards'>
        <h1>Dealer's Hand</h1>
         <Card cardObj={handObj.dealer}/>
         <Card faceDown={true}/>
      </div>

      <img 
        className="buttonKey"
        src = "/perfect-blackjack/buttonKey.png"
        alt = "Button Key"
      />

      <div className='players-cards'>
      <h1>Players's Hand</h1>
        <Card cardObj={handObj.player.card1}/>
        <Card cardObj={handObj.player.card2}/>
      </div>

      { !showNextButton && 
      <div className="buttons">
        <button onClick={() => handleClick(Options.Hit)}>{Options.Hit}</button>
        <button onClick={() => handleClick(Options.Stand)}>{Options.Stand}</button>
        <button onClick={() => handleClick(Options.Split)}>{Options.Split}</button>
        <button onClick={() => handleClick(Options.DoubleHit)}>{Options.DoubleHit}</button>
        <button onClick={() => handleClick(Options.DoubleStand)}>{Options.DoubleStand}</button>
        <button onClick={() => handleClick(Options.SplitHit)}>{Options.DoubleStand}</button>
        <button onClick={() => handleClick(Options.SurrenderHit)}>{Options.SurrenderHit}</button>
      </div>
      }

      <div className="nextButton">
        {showNextButton && <button onClick={newHand}>Next</button>}
      </div>  

    </div>
  );
}

export default App;
