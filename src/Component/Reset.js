import StateOfGame from "./StateOfGame"
export default function Reset({ gameState, handleReset }) {
	if (gameState === StateOfGame.inProgress) {
		return
	}
	return (
		<button onClick={handleReset} className='reset-button'>
			Reset
		</button>
	)
}

 