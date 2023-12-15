import { clearPage } from '../../utils/render';

const StatPage = () => {
    clearPage();
    renderStatPage();
}

function renderStatPage(){
    const main = document.querySelector('main');
    main.innerHTML=`
    <h1 class="text-center" style="padding: 4% ">Statistiques de la partie</h1>
    <div class="container-fluid">
        <div class="row">

            <!-- Table 1 -->
            <div class="col-md-3">
                <table class="table table-bordered table-info">
                    <thead>
                        <tr>
                            <th id="player1Name"></th>
                        </tr>
                    </thead>
                    <tbody id="content1">
                        <!-- Table content goes here -->
                        <tr>
                            <td id="info1"></td>
                        </tr>
                        <tr>
                            <td id="diet1"></td>
                        </tr>
                        <tr>
                            <td id="infi1"></td>
                        </tr>
                        <tr>
                            <td id="cosp1"></td>
                        </tr>
                        <tr>
                            <td id="imgm1"></td>
                        </tr>
                        <tr>
                            <td id="ense1"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Table 2 -->
            <div class="col-md-3">
                <table class="table table-bordered table-success">
                    <thead>
                        <tr>
                            <th id="player2Name"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content goes here -->
                        <tr>
                            <td id="info2">info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Table 3 -->
            <div class="col-md-3" id="table3">
                <table class="table table-bordered table-danger">
                    <thead>
                        <tr>
                            <th id="player3Name"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content goes here -->
                        <tr>
                            <td id="info4">info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Table 4 -->
            <div class="col-md-3">
                <table class="table table-bordered table-warning" id="table4">
                    <thead>
                        <tr>
                            <th id="player4Name"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content goes here -->
                        <tr>
                            <td id="info4">info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    `
    players()
}

function players(){
    /* Récupère tous les endroits où il un nom a display */
    const player1Name = document.querySelector("#player1Name");
    const player2Name = document.querySelector("#player2Name");
    const player3Name = document.querySelector("#player3Name");
    const player4Name = document.querySelector("#player4Name");

    /* Récupère les joueurs du sessionStorage */
    const player1 = JSON.parse(sessionStorage.getItem('player1'));
    const player2 = JSON.parse(sessionStorage.getItem('player2'));
    const player3 = JSON.parse(sessionStorage.getItem('player3'));
    const player4 = JSON.parse(sessionStorage.getItem('player4'));

    /* Affiche les noms des joueurs dans les bonnes cases */
    player1Name.innerHTML = player1.name;
    player2Name.innerHTML = player2.name;

    if (player3 === null){
      const table3 = document.querySelector("#table3");
        table3.style.display = "none"
    }else{
      player3Name.innerHTML = player3.name
    }
    
    
    if (player4 === null){
        const table4 = document.querySelector("#table4");
        table4.style.display = "none"
    }else{
        player4Name.innerHTML = player4.name
    }
    const container = document.querySelector("#content1");
    container.innerHTML = `
    <tr><td> INFO: ${player1.answerINFO}</td></tr>
    <tr><td> DIET: ${player1.answerDIET}</td></tr>
    <tr><td> INFI: ${player1.answerINFI}</td></tr>
    <tr><td> COSP: ${player1.answerCOSP}</td></tr>
    <tr><td> IMGM: ${player1.answerIMGM}</td></tr>
    <tr><td> ENSE: ${player1.answerENSE}</td></tr>`
    
}
export default StatPage;