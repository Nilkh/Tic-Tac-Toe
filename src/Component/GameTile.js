import React from 'react'

export default function GameTile({
	onClick,
	value,
	className,
	currentPlayer = { currentPlayer }}) 
{
	let hoverClass = null
	if (value === null && currentPlayer !== null){
        hoverClass = `${currentPlayer.toLowerCase()}-hover`
	}
		return (
			<div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
				{value}
			</div>
		)
}
