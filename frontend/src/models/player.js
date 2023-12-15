function renderTurn(){
    
    // Récupère le joueur actuel du localStorage
    const currentPlayer = JSON.parse(sessionStorage.getItem('currentPlayer'));

    // Récupère l'élément HTML pour le tour
    const turnDiv = document.querySelector('#turn');

    // Modifie le contenu de la div turn pour afficher le joueur actuel
    turnDiv.innerHTML = `C'est au tour de ${currentPlayer.name}`;
}

function nextPlayer(){
    // Récupère le joueur actuel du localStorage
    const currentPlayer = JSON.parse(sessionStorage.getItem('currentPlayer'));

    const player1 = JSON.parse(sessionStorage.getItem('player1'));
    const player2 = JSON.parse(sessionStorage.getItem('player2'));
    const player3 = JSON.parse(sessionStorage.getItem('player3'));
    const player4 = JSON.parse(sessionStorage.getItem('player4'));

    if (currentPlayer.number === 1) {
        sessionStorage.setItem('currentPlayer', JSON.stringify(player2));
    } else if (currentPlayer.number === 2) {
        if (player3 === null) {
            sessionStorage.setItem('currentPlayer', JSON.stringify(player1));
        } else {
            sessionStorage.setItem('currentPlayer', JSON.stringify(player3));
        }
    } else if (currentPlayer.number === 3) {
        if (player4 === null) {
            sessionStorage.setItem('currentPlayer', JSON.stringify(player1));
        } else {
            sessionStorage.setItem('currentPlayer', JSON.stringify(player4));
        }
    } else if (currentPlayer.number === 4) {
        sessionStorage.setItem('currentPlayer', JSON.stringify(player1));
    }
}

export {renderTurn, nextPlayer};