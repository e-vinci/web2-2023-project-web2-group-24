import { clearPage } from '../../utils/render';

const StatsPage = () => {
    clearPage();
    renderStatsPage();
}

function renderStatsPage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <h1 class="text-center" style="padding: 4% ">Statistiques utilisateur</h1>
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

<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`

}


export default StatsPage;