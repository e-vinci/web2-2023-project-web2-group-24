import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import SetUpPage from '../Pages/SetUpPage';
import PersonnalStatsPage from '../Pages/PersonnalStatsPage';
import StatsPage from '../Pages/StatPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/connexion' : LoginPage,
  '/setup': SetUpPage,
  '/inscription' : RegisterPage,
  '/stats' : PersonnalStatsPage,
  '/gameStats' : StatsPage
};

export default routes;
