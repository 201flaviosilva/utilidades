/**
 * Lets play a game. Rock Paper Scissors.
 * 
 * This function will check which is the winner of the game, based on the options:
 * - "r" for rock;
 * - "p" for paper;
 * - "s" for scissor;
 * 
 * And determines the winner:
 * - 0 for draw
 * - 1 for player 1
 * - 2 for player 2
 * 
 * @example rockPaperScissor("p", "p"); // 0
 * @example rockPaperScissor("r", "r"); // 0
 * @example rockPaperScissor("s", "s"); // 0
 * 
 * @example rockPaperScissor("p", "r"); // 1
 * 
 * @example rockPaperScissor("s", "r"); // 2
 * 
 * @param {string} player1 - the player 1 option
 * @param {string} player2 - the player 2 option
 * @returns {number}
 */
export function rockPaperScissor(player1, player2) {
	if (player1 === player2) return 0;
	else if (
		(player1 === "r" && player2 === "p") ||
		(player1 === "p" && player2 === "s") ||
		(player1 === "s" && player2 === "r")) return 2;
	else return 1;
}
