import StateOfGame from "./StateOfGame";
export default function GameWinner({ gameState }) {
	switch (gameState) {
        case StateOfGame.inProgress:
            return<></>;
        case StateOfGame.playerOWins:
            return<div className="game-over">O Wins</div>;
        case StateOfGame.playerXWins:
            return<div className="game-over">X Wins</div>;
        case StateOfGame.draw:
            return<div className="game-over">Draw</div>;
        default:
           return<></>;

    }
}

 