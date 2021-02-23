import React, {useState} from "react";
import Board from './components/Board'
import "./styles/root.scss";
import {calculateWinner} from "./components/helper";


const App = () => {

  const [board,setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`
  const handelClick = pos => {
      if (board[pos] || winner){
          return;
      
      };
      setBoard((prev)=>{
          return prev.map((square, p)=>{
              if (pos === p) {
                  return isXNext ? 'X' : 'O';
              }
              return square;
          })
      });
      setIsXNext(prev=>!prev);


  };

  return (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handelClick={handelClick}/>
  </div>
  );
};
export default App;