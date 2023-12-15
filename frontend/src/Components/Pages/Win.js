import { clearPage } from '../../utils/render';

const Win = async () => {
    clearPage();
    renderWinPage();
  };

  function renderWinPage(){
    const main = document.querySelector('main');
    main.innerHTML =`HEYYY BIEN JOUÉ !`    
  }

  
export default Win;