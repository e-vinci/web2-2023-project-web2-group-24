const game = [];

const addPlayer = (player) => game.push(player);

const getPlayer = (index) => game[index];

export {addPlayer, getPlayer}