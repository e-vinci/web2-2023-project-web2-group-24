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
                            <th>Joueur 1</th>
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
                    </tbody>
                </table>
            </div>

            <!-- Table 2 -->
            <div class="col-md-3">
                <table class="table table-bordered table-success">
                    <thead>
                        <tr>
                            <th>Joueur 2</th>
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
                    </tbody>
                </table>
            </div>

            <!-- Table 3 -->
            <div class="col-md-3">
                <table class="table table-bordered table-danger">
                    <thead>
                        <tr>
                            <th>Joueur 3</th>
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
                    </tbody>
                </table>
            </div>

            <!-- Table 4 -->
            <div class="col-md-3">
                <table class="table table-bordered table-warning">
                    <thead>
                        <tr>
                            <th>Joueur 4</th>
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
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    `
}
export default StatPage;