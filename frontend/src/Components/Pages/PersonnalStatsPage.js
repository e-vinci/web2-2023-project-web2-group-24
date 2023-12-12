import { clearPage } from '../../utils/render';
import { getAllStatistics } from '../../models/statistic';

const PersonnalStatsPage = async () => {
  clearPage();
  await renderPersonalStatsPage();   
  await renderStats(); 
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
}

async function renderStats() {
  const span = document.querySelector('#username');
  const stats = await getAllStatistics(1);  
  span.innerHTML = `<h1 class="text-center" style="padding: 4% ">Statistiques de : ${stats.utilisateur}</h1>`;  
}

export default PersonnalStatsPage;