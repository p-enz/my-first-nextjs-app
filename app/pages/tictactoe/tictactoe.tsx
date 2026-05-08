'use client'

import { useEffect, useState } from "react";
import "./tictactoe.css";


export default function Tictactoe() {
//Variables:  
const [board, setBoard] = useState<(string | null)[]> (Array(9).fill(null));
const [isXTurn, setIsXTurn] = useState(true);

const WIN_PATTERNS :number[][] = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6]
]

//Hooks: 
useEffect(() => {
  const winner = getWinner(board);
  if (winner){
    alert(`Player ${winner} wins!`);
  }
  else if (board.every(square => square !== null)) {
    alert("It's a draw!");
    
  }
}, [board])

//Functions:



function handleClickForSquare(squareIndex:number) {
    setBoard((prevBoard) => {
      if(prevBoard[squareIndex]) return prevBoard; // space is already taken

      const updatedBoard = [...prevBoard];
      updatedBoard[squareIndex] = isXTurn ? "X" : "O";
      return updatedBoard;
    });
    
    setIsXTurn((previousIsXTurn) => !previousIsXTurn);
  }

/*
* @param board - the current state of board represented as an array of strings (either "X", "O", or null)
* @return "X" or "0" depinging on who won, or null if there is no winner yet
*/
function getWinner (board:(string | null)[]) : "X" | "O" | null {
  for (const pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as "X" | "O";
    }
  }
  return null;
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