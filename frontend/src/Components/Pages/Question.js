
import { checkWin, nextPlayer } from '../../models/player';
import getOneQuestion from '../../models/question';
import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

import { players, renderTurn } from './GamePage';

const Question = async () => {
    clearPage();
    renderQuestionPage();
    
  };

function renderQuestionPage(){
const main = document.querySelector('main');
main.innerHTML =`
<div id="turn" class ="text-center fs-2"></div>
<div class="container" id="questionWrapper" style: "z-index: 10"></div>
        
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
    renderTurn()
}


async function renderQuestion(){
    const question = document.querySelector('#questionWrapper');
    question.innerHTML=`
    <div class = "card text-center opacity-70 border-primary d-grid col-6 mx-auto" >
      <div class = "card-header fs-1 p-4" >
      <span id="categorie"></span>
      </div>
      <div class = "card-body p-5">
        <p class = "card-text fs-2 p-5 " id="question"></p>
          <button type="button" class="btn btn-outline-success fs-2 m-5" id="btnTrue" value="true">VRAI</button>
          <button type="button" class="btn btn-outline-danger fs-2 m-5" id = "btnFalse" value="false">FAUX</button>
      </div>
      <span class ="mb-5 fs-3" id="answer" ></span>          
    </div>
    `
    

    const categorie = sessionStorage.getItem('categorie');
    renderQuestionDetail(categorie);


    const btnTrue = document.querySelector('#btnTrue');
    btnTrue.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("btnFalse").style.visibility = "hidden";
        checkAnswer(btnTrue.value);
        setTimeout(() => {
            Navigate('/game')
          }, 2000);
    })

    const btnFalse = document.querySelector('#btnFalse');
    btnFalse.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("btnTrue").style.visibility = "hidden";
        checkAnswer(btnFalse.value);
        setTimeout(() => {
            Navigate('/game')
        }, 2000);
    })
    

  }

  
  async function renderQuestionDetail(categorie){
    const spanCat = document.querySelector('#categorie');
    const spanQuestion = document.querySelector('#question');
    const cat = await getOneQuestion(categorie);
    spanCat.innerHTML=`${cat.nom_categorie}`
    spanQuestion.innerHTML=`${cat.question}`
    localStorage.setItem('answer', cat.valeur)
  }

function checkAnswer(answer){
    const spanAnswer = document.querySelector('#answer');
    const categorie = sessionStorage.getItem('categorie');

    if (answer === localStorage.getItem('answer')){
        const player = JSON.parse(sessionStorage.getItem('currentPlayer'));
        if (categorie === 'INFO'){
            const answerINFO = player.answerINFO + 1;
            player.answerINFO = answerINFO;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
        if (categorie === 'COSP'){
            const answerCOSP = player.answerCOSP + 1;
            player.answerCOSP = answerCOSP;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
        if (categorie === 'IMGM'){   
            const answerIMGM = player.answerIMGM + 1;
            player.answerIMGM = answerIMGM;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
         if (categorie === 'DIET'){
            const answerDIET = player.answerDIET + 1;
            player.answerDIET = answerDIET;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
        if (categorie === 'INFI'){
            const answerINFI = player.answerINFI + 1;
            player.answerINFI = answerINFI;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
        if (categorie === 'ENSE'){
            const answerENSE = player.answerENSE + 1;
            player.answerENSE = answerENSE;
            sessionStorage.setItem('currentPlayer', JSON.stringify(player));
        }
        spanAnswer.innerHTML=`C'est une bonne réponse !`
        console.log('CHECKKKKKKK')
        console.log(`CURRENT PLAYER : ${sessionStorage.getItem('currentPlayer')}`)
        console.log(`PLAYER1 : ${sessionStorage.getItem('player1')}`)
        console.log(`PLAYER2 : ${sessionStorage.getItem('player2')}`)   
       checkWin();

    }else{
        spanAnswer.innerHTML=`C'est une mauvaise réponse !`
        nextPlayer() 
    }  
}
 
  export default Question;