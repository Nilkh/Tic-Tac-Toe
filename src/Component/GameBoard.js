import React from 'react'
import GameTile from './GameTile'
import Strike from './Strike'


export default function GameBoard({
	tiles,
	handlePlayerOnClick,
	currentPlayer,
	winnerStrike,
}) {
	return (
		<>
			<div className='board'>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(0)}
					value={tiles[0]}
					className='right-border bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(1)}
					value={tiles[1]}
					className='right-border bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(2)}
					value={tiles[2]}
					className='bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(3)}
					value={tiles[3]}
					className='right-border bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(4)}
					value={tiles[4]}
					className='right-border bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(5)}
					value={tiles[5]}
					className='bottom-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(6)}
					value={tiles[6]}
					className='right-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(7)}
					value={tiles[7]}
					className='right-border'
				/>
				<GameTile
					currentPlayer={currentPlayer}
					onClick={() => handlePlayerOnClick(8)}
					value={tiles[8]}
				/>
				<Strike winnerStrike={winnerStrike} />
			</div>
		</>
	)
}
