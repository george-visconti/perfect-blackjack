import { useState } from 'react';
import './App.css';
import {handSetUp, Options, OptionStrings} from './utils'

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
      alert(`That is wrong. \n The correct answer was to: ${OptionStrings[handObj.answer]}`)
    }
    setShowNextButton(true);
  }

  function newHand() {
    setHandObj(handSetUp());
    setShowNextButton(false);
  }

  return (

    <div className="flex flex-col flex items-center justify-center pt-10 space-y-10">

      <div className="space-y-2">
        <h1 className="font-bold text-3xl text-center">Dealer's Hand</h1>
        <div className="flex flex-row"> 
          <Card cardObj={handObj.dealer}/>
          <Card faceDown={true}/>
        </div>
      </div>

      <img 
        className="buttonKey"
        src = "/perfect-blackjack/buttonKey.png"
        alt = "Button Key"
      />

      <div className="space-y-2">
        <h1 className="font-bold text-3xl text-center">Players's Hand</h1>
        <div className="flex flex-row"> 
          <Card cardObj={handObj.player.card1}/>
          <Card cardObj={handObj.player.card2}/>
        </div>
      </div>

      
      <div className="text-lg font-serif">
          {!showNextButton &&
          <div className="space-x-4 space-y-2">  
          <button className="bg-[rgb(123,148,186)] hover:font-bold text-black  h-10 w-20 border border-black rounded" 
            onClick={() => handleClick(Options.Hit)}>
              {Options.Hit}
          </button>
          <button className="bg-[rgb(223,224,224)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.Stand)}>
              {Options.Stand}
          </button>
          <button className="bg-[rgb(101,185,221)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.Split)}>
              {Options.Split}
          </button>
          <button className="bg-[rgb(169,192,113)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.DoubleHit)}>
              {Options.DoubleHit}
          </button>
          <button className="bg-[rgb(169,192,113)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.DoubleStand)}>
              {Options.DoubleStand}
          </button>
          <button className="bg-[rgb(224,132,94)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.SplitHit)}>
              {Options.SplitHit}
          </button>
          <button className="bg-[rgb(182,129,219)] hover:font-bold text-black  h-10 w-20 border border-black rounded"
            onClick={() => handleClick(Options.SurrenderHit)}>
              {Options.SurrenderHit}
          </button>
        </div>}
        {showNextButton && 
          <button className="bg-indigo-500 hover:font-bold text-white  h-10 w-20 border border-black rounded"
            onClick={newHand}>
              Next
          </button>}
      </div>


    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">The correctness is based on the chart from <a 
              href="https://www.techopedia.com/gambling-guides/blackjack-strategy" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="underline">
              this site
            </a>
        
          </span>
        
        </div>
    </footer>

    </div>
  );
}

export default App;
