import { clearPage, hideFooter } from '../../utils/render';
import Navigate from '../Router/Navigate';

const Win = async () => {
    const winner = JSON.parse(sessionStorage.getItem('winner'));
    
    if (!winner) {
        Navigate('/game');
        return;
    }

    clearPage();
    
    renderWinPage();
};


function renderWinPage(){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="container-fluid d-flex justify-content-center" style="padding-top: 5%;">
    <h1 class="text-center text-primary display-1" id="msg"></h1>
  </div>`

  
    const msg = document.querySelector('#msg');
    msg.innerHTML = ` Victoire ! ${JSON.parse(sessionStorage.getItem('winner')).name} a gagné !`
    hideFooter()
}

export default Win;