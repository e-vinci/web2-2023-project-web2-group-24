import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import renderPrivacyText from '../privacyAccord';
import {register} from '../../models/user';

const RegisterPage = async () => {
    clearPage();
    await renderRegisterPage();
};

async function renderRegisterPage() {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div id="privacyPolicyWrapper"></div>
    <section class="bg-primary">
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9 mb-5">
    
                <h1 class="text-white mb-4 mt-3">Inscription</h1>
    
                    <div class="card" style="border-radius: 15px;">
                    
                        <div class="card-body">
    
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
    
                                    <h6 class="mb-0">Nom d'utilisateur*</h6>
    
                                </div>
                                <div class="col-md-9 pe-5">
                                <input type="text" class="form-control form-control-lg" id="usernameInput" />
                                </div>
                            </div>
    
                            <hr class="mx-n3">
    
                            <div class="row align-items-center pt-4 pb-3">
                                <div class="col-md-3 ps-5">
    
                                    <h6 class="mb-0">Adresse e-mail*</h6>
    
                                </div>
                                <div class="col-md-9 pe-5">
                                <input type="text" class="form-control form-control-lg" id="emailInput" />
                                </div>
                            </div>
    
                            <hr class="mx-n3">
    
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
    
                                    <h6 class="mb-0">Mot de passe*</h6>
    
                                </div>
                                <div class="col-md-9 pe-5">
    
                                    <input type="password" class="form-control form-control-lg" id="passwordInput"/>
    
                                </div>
                            </div>
                            <hr class="mx-n3">
                            <div class="row align-items-center py-3">
                                <div class="col-md-3 ps-5">
    
                                    <h6 class="mb-0">Confirmer le mot de passe*</h6>
    
                                </div>
                                <div class="col-md-9 pe-5">
    
                                    <input type="password" class="form-control form-control-lg"/>
    
                                </div>
                            </div>
                            <hr class="mx-n3">
                            <div class="mx-5">
                               <a href="" id="toConnexion"> Déjà un compte ? Connectez-vous ici</a>
                            </div>
   
                            </div>
                            <div class="card-body mx-3">Les champs marqués d'une * sont obligatoires </div>
                            <div class="px-5 py-4">
                                <input type="submit" class="btn btn-primary btn-lg" id="submit" value="Inscription"/>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </section>
    `;

    const toConnexionButton = document.querySelector('#toConnexion');
    toConnexionButton.addEventListener('click', (e) => {
        e.preventDefault();
        Navigate('/connexion');
    });

    const submitButton = document.querySelector('#submit');
    console.log(submitButton);
    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const username = document.querySelector('#usernameInput').value;
        const email = document.querySelector('#emailInput').value;
        const password = document.querySelector('#passwordInput').value;

        const options = {
            method: 'POST',
            body: JSON.stringify({
              username,
              email,
              password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          };

        await register(options);
        Navigate('/connexion');
    });
    renderPrivacyText();
};





export default RegisterPage;
