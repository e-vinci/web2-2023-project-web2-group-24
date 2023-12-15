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
                    <tbody>
                        <!-- Table content goes here -->
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
                        <tr>
                            <td>info: 8/10</td>
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
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Table 3 -->
            <div class="col-md-3">
                <table class="table table-bordered table-danger">
                    <thead>
                        <tr>
                            <th id="player3Name"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content goes here -->
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
                        <tr>
                            <td>info: 8/10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Table 4 -->
            <div class="col-md-3">
                <table class="table table-bordered table-warning">
                    <thead>
                        <tr>
                            <th id="player4Name"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table content goes here -->
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
    const player1Name = document.querySelector("#player1Name");
    const player1 = JSON.parse(sessionStorage.getItem('player1'));
    player1Name.innerHTML = player1.name;
    
    const player2Name = document.querySelector("#player2Name");
    const player2 = JSON.parse(sessionStorage.getItem('player2'))
    player2Name.innerHTML = player2.name;
    const player3Name = document.querySelector("#player3Name");
    const player3 = JSON.parse(sessionStorage.getItem('player3'));
    if (player3 === null){
      player3Name.innerHTML = "Joueur 3"
    }else{
      player3Name.innerHTML = player3.name
    }
    
    const player4Name = document.querySelector("#player4Name");
    const player4 = JSON.parse(sessionStorage.getItem('player4'))
    if (player4 === null){
      player4Name.innerHTML = "Joueur 4"
    }else{
      player4Name.innerHTML = player4.name
    }
  
  }
export default StatPage;