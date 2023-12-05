import { clearPage } from '../../utils/render';

const PersonnalStatsPage = () => {
    clearPage();
    renderPersonnalStatsPage();
}

function renderPersonnalStatsPage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <h1 class="text-center" style="padding: 4% ">Statistiques utilisateur</h1>
  <div class='container'>

  <div class = "container mb-5">
<div class="card w-50 d-flex">
  <div class="card-body">
    <span id = "nom_utilisateur"></span>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
  </div>
</div>

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
</div>
`
}

export default PersonnalStatsPage;