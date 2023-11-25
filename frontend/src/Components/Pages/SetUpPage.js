import { clearPage } from '../../utils/render';

const SetUpPage = () => {
    clearPage();
    renderSetUpPage();
}

function renderSetUpPage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <div class="container-fluid d-flex justify-content-center" style="padding-top: 5%; padding-bottom: 11%">
  <form>
    <div class="container overflow-hidden text-center">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Joueur 1 </h5>
                        <div class="row mb-3">
                            <label for="inputPseudo1" class="col-sm-2 col-form-label">Pseudo :</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPseudo1">
                            </div>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Joueur 2 </h5>
                        <div class="row mb-3">
                            <label for="inputPseudo2" class="col-sm-2 col-form-label">Pseudo :</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPseudo2">
                            </div>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Joueur 3 </h5>
                        <div class="row mb-3">
                            <label for="inputPseudo3" class="col-sm-2 col-form-label">Pseudo :</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPseudo3">
                            </div>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Joueur 4 </h5>
                        <div class="row mb-3">
                            <label for="inputPseudo4" class="col-sm-2 col-form-label">Pseudo :</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPseudo4">
                            </div>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</form>
</div>
`
}

export default SetUpPage;