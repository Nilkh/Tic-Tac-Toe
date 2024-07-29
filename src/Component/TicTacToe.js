import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import Strike from './Strike'
import GameWinner from './GameWinner'
import StateOfGame from './StateOfGame'
import Reset from './Reset'

const Player_X = "X"
const Player_O = 'O'
 const winningCombinations = [
		//Rows
		{ combo: [0, 1, 2], winnerStrike: 'strike-row-1' },
		{ combo: [3, 4, 5], winnerStrike: 'strike-row-2' },
		{ combo: [0, 1, 2], winnerStrike: 'strike-row-3' },

		//Columns
		{ combo: [0, 3, 6], winnerStrike: 'strike-column-1' },
		{ combo: [1, 4, 7], winnerStrike: 'strike-column-2' },
		{ combo: [2, 5, 8], winnerStrike: 'strike-column-3' },

		//Diagonals
		{ combo: [0, 4, 8], winnerStrike: 'strike-diagonal-1' },
		{ combo: [2, 4, 6], winnerStrike: 'strike-diagonal-2' },
 ]

		
 
  
function checkWinner(tiles, setWinnerStrike, setGameState) {
	for (const { combo, winnerStrike } of winningCombinations) {
		const tileValue1 = tiles[combo[0]]
		const tileValue2 = tiles[combo[1]]
		const tileValue3 = tiles[combo[2]]
		if (
			tileValue1 !== null &&
			tileValue1 === tileValue2 &&
			tileValue1 === tileValue3
		) {
			setWinnerStrike(winnerStrike)
			if (tileValue1 === Player_X ) {
				setGameState(StateOfGame.playerXWins)
			}else{setGameState(StateOfGame.playerOWins)}
			return;
		}
	}
	const areAllTilesFilledIn =tiles.every((tile) => tile !== null);
	if ( areAllTilesFilledIn){
		setGameState(StateOfGame.draw)
	}
}

export default function TicTacToe() {
     const [tiles, setTiles] = useState(Array(9).fill(null))
	 const [currentPlayer, setCurrentPlayer] = useState(Player_X)
	 const [winnerStrike, setWinnerStrike] = useState()
     const [gameState, setGameState] = useState(StateOfGame.inProgress)

	 useEffect(() => {
			checkWinner(tiles, setWinnerStrike, setGameState)
		}, [tiles])
	

	function handlePlayerOnClick(index)  {
		if (gameState !== StateOfGame.inProgress){
			return;
		}
		if(tiles[index] !== null){
			return;
		}

		const newTiles = [...tiles]
		newTiles[index] = currentPlayer
		setTiles(newTiles)
		if (currentPlayer === Player_X) {
			setCurrentPlayer(Player_O)
		} else {
			setCurrentPlayer(Player_X)
		}
	}

	const handleReset = () => {
		setGameState(StateOfGame.inProgress)
		setTiles(Array(9).fill(null))
		setCurrentPlayer(Player_X)
		setWinnerStrike(null)

	}
    return (
			<>
				<h3>Tic Tac Toe</h3>
				<GameBoard
					currentPlayer={currentPlayer}
					tiles={tiles}
					handlePlayerOnClick={handlePlayerOnClick}
					winnerStrike={winnerStrike}
				/>
				<GameWinner gameState={gameState} />
				<Reset gameState={gameState} handleReset={handleReset} />
			</>
		)
}
		

	
