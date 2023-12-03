import { clearPage } from '../../utils/render';

const StatsPage = () => {
    clearPage();
    renderStatsPage();
}

function renderStatsPage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <h1 class="text-center" style="padding: 4% ">Statistiques de la partie</h1>
  <div class='container'>
  
<table class="table">
  <thead>
    <tr>
      <th scope="col">Joueur</th>
      <th scope="col">Nombre de questions posées</th>
      <th scope="col">Nombre de parties jouées</th>
      <th scope="col">Nombre de victoires</th>
      <th scope="col">Catégorie préférée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
</div>
`

}


export default StatsPage;