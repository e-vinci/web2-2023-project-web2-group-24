// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const GamePage = async () => {
    clearPage();
    renderGamePage();
    renderQuestion();
  };
export default GamePage;

function renderQuestion(){
  const question = document.querySelector('#questionWrapper');
  question.innerHTML=`
  <div class = "card  text-center opacity-100 border-primary d-grid gap-2 col-6 mx-auto" style = "width: 20rem;">
    <div class = "card-header ">
      Question sur : [CATEGORIE]
    </div>
    <div class = "card-body">
      <p class = "card-text "> [QUESTION]</p>
      <div>
        <button type="button" class="btn btn-outline-success">VRAI</button>
        <button type="button" class="btn btn-outline-danger justify-content-md-end">FAUX</button>
      </div>
    </div>           

  </div>

  
  `
  
}
function renderGamePage(){
  const main = document.querySelector('main');
    main.innerHTML =`
    <div id="questionWrapper" style: "z-index: 10"></div>`
}
