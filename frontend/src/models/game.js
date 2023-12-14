const game = [];

function addPlayer(player) {
    game.push(player);
}
function getPlayers(noPlayer) {
    const player = JSON.parse(game[noPlayer - 1]);
    return player.name;
}

export { addPlayer, getPlayers }
