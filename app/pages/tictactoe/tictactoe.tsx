'use client'

import { useState } from "react";
import "./tictactoe.css";


export default function Tictactoe() {
//Variables:  
const [board, setBoard] = useState<(string | null)[]> (Array(9).fill(null));
const [isXTurn, setIsXTurn] = useState(true);

const WIN_CONDITIONS :number[][] = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6]
]

function handleClickForSquare(squareIndex:number) {
    setBoard((prevBoard) => {
      if(prevBoard[squareIndex]) return prevBoard; // space is already taken

      const updatedBoard = [...prevBoard];
      updatedBoard[squareIndex] = isXTurn ? "X" : "O";
      return updatedBoard;
    });
    
    setIsXTurn((previousIsXTurn) => !previousIsXTurn);
  }



  return (
    <section className="field">
      <h1 className="gametitle">Play Tic Tac Toe</h1>
      {board.map((value, index)=> (
        <div 
          key={index} 
          className="square"
          onClick={() => handleClickForSquare(index)}
          id={`square-${index}`}
        >
          {value}
        </div> 
      ))}
      <button className="reset-button" onClick={() => setBoard(Array(9).fill(null))}>
        Reset Game
      </button>
    </section>
  
  );
}