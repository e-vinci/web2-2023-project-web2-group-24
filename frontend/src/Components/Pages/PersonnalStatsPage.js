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

<div class="d-flex justify-content-center pt-5">
  <div class="card border-primary mb-3 w-50 d-flex" ">
      <div class="card-body text-primary">
      <table class="table">
  
  <tbody>
    
    <tr>
      <th scope="row">Nombre de questions posées</th>
      <td>Jacob</td>
      
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

export default PersonnalStatsPage;