<<<<<<< HEAD

=======
// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
>>>>>>> 7a16de50cd5f0c2a3249302a217f6fd14e80582c

const GamePage = async () => {
    clearPage();
    renderGamePage();
    renderQuestion();
  };
export default GamePage;

function renderQuestion(){
  const question = document.querySelector('#questionWrapper');
  question.innerHTML=`
  <div class = "card text-center opacity-70 border-primary d-grid col-6 mx-auto" >
    <div class = "card-header fs-1 p-4">
      Question sur : [CATEGORIE]
    </div>
    <div class = "card-body p-5">
      <p class = "card-text fs-1 p-5 "> [QUESTION]</p>
      <div>
        <button type="button" class="btn btn-outline-success fs-2 m-5">VRAI</button>
        <button type="button" class="btn btn-outline-danger fs-2 m-5" >FAUX</button>
      </div>
    </div>           
  </div>
  ` 
}
function renderGamePage(){
  const main = document.querySelector('main');
    main.innerHTML =`
    <div class="container" id="questionWrapper" style: "z-index: 10"></div>`
}
