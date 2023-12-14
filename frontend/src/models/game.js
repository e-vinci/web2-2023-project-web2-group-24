const game = [];

function addPlayer(player) {
    console.log(`YOOOOOOOOOOO ${  player}`);
    game.push(player);
}
function getPlayers(noPlayer) {
    console.log(game);
    const player = JSON.parse(game[noPlayer - 1]);
    console.log(player.name);
    return player.name;
}

export { addPlayer, getPlayers }
