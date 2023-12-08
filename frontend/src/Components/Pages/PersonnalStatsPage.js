import { clearPage } from '../../utils/render';

const PersonnalStatsPage = () => {
    clearPage();

    renderPersonnalStatsPage();
}

function renderPersonnalStatsPage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <h1 class="text-center" style="padding: 4% ">Statistiques de : [UTILISATEUR]</h1>
  <div class='container'>

  <div class = "container mb-5 ">
<div class="card">
  <div class="card-body d-flex justify-content-center">
    
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
    <span id="non_utilisateur"></span>
    <span id="nb_questions"></span>
    <span id="nb_parties"></span>
    <span id="nb_victoires"></span>
    <span id="categrorie_pref"></span>
  </tr>
</tbody>
</table>
  </div>
  </div>
</div>

</div>
</div>
`
}

export default PersonnalStatsPage;