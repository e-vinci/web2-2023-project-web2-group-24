
import getOneQuestion from '../../models/question';
import { clearPage } from '../../utils/render';
import { players } from './GamePage';

const Question = async () => {
    clearPage();
    renderQuestionPage();
    
  };

function renderQuestionPage(){
const main = document.querySelector('main');
main.innerHTML =`
<div class="container" id="questionWrapper" style: "z-index: 10"></div>
        <div class="mb-5" style = "text-align:center;">
            <canvas id="canvas" width="500" height="500"></canvas>
            <div>
              <input type="button" class = "btn btn-primary btn-lg" value="spin" style="float:center;" id='spin' />
            </div>
        </div>
        <div class="position relative p-5">
            <div class="position-absolute top-0 start-0 mt-5">
                <div class="card mt-4">
                    <div class = "card-body bg-info">
                        <h5 id="player1Name" class="card-title">Joueur 1 </h5>
                    </div>
                </div>
            </div>
            <div class="position-absolute top-0 end-0 mt-5">
                <div class="card mt-4">
                    <div class = "card-body bg-success">
                        <h5 id="player2Name" class="card-title">Joueur 2 </h5>
                    </div>
                </div>
            </div>
            <div id="player3Card" class="position-absolute bottom-0 start-0">
                <div class="card">
                    <div class = "card-body bg-danger">
                        <h5 id="player3Name" class="card-title">Joueur 3 </h5>
                    </div>
                </div>
            </div>
            <div id="player4Card" class="position-absolute bottom-0 end-0">
                <div class="card mt-4">
                    <div class = "card-body bg-warning">
                        <h5 id="player4Name" class="card-title">Joueur 4 </h5>
                    </div>
                </div>
            </div>
        </div>
    }
    `     
    players()  
    renderQuestion()
}


function renderQuestion(){
    const question = document.querySelector('#questionWrapper');
    question.innerHTML=`
    <div class = "card text-center opacity-70 border-primary d-grid col-6 mx-auto" >
      <div class = "card-header fs-1 p-4" >
      <span id="categorie"></span>
      </div>
      <div class = "card-body p-5">
        <p class = "card-text fs-1 p-5 "> [QUESTION]</p>
          <button type="button" class="btn btn-outline-success fs-2 m-5">VRAI</button>
          <button type="button" class="btn btn-outline-danger fs-2 m-5" >FAUX</button>
        
      </div>           
    </div>
    `
    renderQuestionDetail();
  }

  async function renderQuestionDetail(){
    const spanCat = document.querySelector('#categorie');
    const cat = await getOneQuestion('INFO');
    spanCat.innerHTML=`${cat[0].category}`
  }
  export default Question;