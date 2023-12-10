// eslint-disable-next-line import/no-extraneous-dependencies
import Chart from 'chart.js/auto';
import { clearPage } from '../../utils/render';




const GamePage = () => {
    clearPage();
    renderGamePage();
}

function renderGamePage(){
    const main = document.querySelector('main');
    main.innerHTML = `
    <canvas id="myChart" width="500" height="500"></canvas>

    <script src="main.js"></script>
    `
    addEventListener();
}

function addEventListener(){
    Chart.defaults.plugins.legend.display = false;
    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            datasets: [{
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white'
                ],
                borderColor: 'black',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Set this to false to adjust chart size freely
            aspectRatio: 1, // Set the aspect ratio (width:height), adjust as needed
        }
   });
    myChart.data.datasets[0].backgroundColor[5] = 'red'
    myChart.update();
};

export default GamePage;        