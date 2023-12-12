import { clearPage } from '../../utils/render';
import { getAllStatistics } from '../../models/statistic';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const PersonnalStatsPage = async () => {
  if (!isAuthenticated){
      Navigate('/connexion')
  }
  clearPage();
  await renderPersonalStatsPage();   
   
}

async function renderPersonalStatsPage(){
  const main = document.querySelector('main');
  main.innerHTML=`  
  <span id="username"></span>
  <div class='container'>
  
  <div class="d-flex justify-content-center pt-5">
  <div class="card border-primary mb-3 w-50 d-flex" ">
  <div class="card-body text-primary">
  <table class="table">
  
  <tbody>
  
  <tr>
  <th scope="row">Nombre de questions posées</th>
  <td id = "nb_questions"></td>
  
  <tr>
  <th scope="row">Nombre de parties jouées</th>
  <td>Larry</td>
  
  </tr>
  <tr>
  <th scope="row">Nombre de victoires</th>
  <td>Larry</td>
  
  </tr>
  <tr>
  <th scope="row">Catégorie préférée</th>
  <td>Larry</td>
  
  </tr>
  </tbody>
  </table>
  
  </div>
  </div>
  </div>
  </div>
  </div>
  `
  await renderStats();
}

async function renderStats() {
  const span = document.querySelector('#username');
  const user = getAuthenticatedUser();
  const options = {
    headers: {
        'Authorization': user.token
    },
}
  const stats = await getAllStatistics(1, options);
  console.log(stats);
  span.innerHTML = `<h1 class="text-center" style="padding: 4% ">Statistiques de : ${stats.nom_utilisateur}</h1>`;  
}

export default PersonnalStatsPage;