// eslint-disable-next-line import/no-extraneous-dependencies
// import Chart from 'chart.js/auto';

import { clearPage } from '../../utils/render';




const GamePage = () => {
    clearPage();
    renderGamePage();
}

function renderGamePage(){
    const main = document.querySelector('main');
    main.innerHTML = `
    
    <div style = "text-align:center;">
        <canvas id="canvas" width="500" height="500"></canvas>
    </div>
    <div style="text-align:center;">   
        <input type="button" value="spin" style="float:left;" id='spin' />
    </div>

    `
    renderWheel();
}

function renderWheel(){
    const options = ["info", "pharma", "diétique", "random", "idk", "prout"];

    const colors = ["red", "green", "black", "yellow", "blue", "purple"]
    
    let startAngle = 0;
    const arc = Math.PI / (options.length / 2);
    let spinTimeout = null;
    
    let spinTime = 0;
    let spinTimeTotal = 0;
    
    let ctx;
    
    document.getElementById("spin").addEventListener("click", spin);
    
    function drawRouletteWheel() {
      const canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        const outsideRadius = 200;
        const textRadius = 160;
        const insideRadius = 125;
    
        ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,500,500);
    
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
    
        ctx.font = 'bold 12px Helvetica, Arial';
    
        for(let i = 0; i < options.length; i+=1) {
          const angle = startAngle + i * arc;
          ctx.fillStyle = colors[i];
    
          ctx.beginPath();
          ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
          ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
          ctx.stroke();
          ctx.fill();
    
          ctx.save();
          ctx.shadowOffsetX = -1;
          ctx.shadowOffsetY = -1;
          ctx.shadowBlur    = 0;
          ctx.shadowColor   = "rgb(220,220,220)";
          ctx.fillStyle = "black";
          ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                        250 + Math.sin(angle + arc / 2) * textRadius);
          ctx.rotate(angle + arc / 2 + Math.PI / 2);
          const text = options[i];
          ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          ctx.restore();
        } 
    
        // Arrow
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
        ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
        ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
        ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
        ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
        ctx.fill();
      }
    }
    let spinAngleStart;
    
    function spin() {
      spinAngleStart = Math.random() * 10 + 10
      spinTime = 0;
      spinTimeTotal = Math.random() * 3 + 4 * 1000;
      rotateWheel();
    }

    function rotateWheel() {
      spinTime += 30;
      if(spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
      }
      const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      startAngle += (spinAngle * Math.PI / 180);
      drawRouletteWheel();
      spinTimeout = setTimeout(rotateWheel(), 30);
    }
    
    
    function stopRotateWheel() {
      clearTimeout(spinTimeout);
      const degrees = startAngle * 180 / Math.PI + 90;
      const arcd = arc * 180 / Math.PI;
      const index = Math.floor((360 - degrees % 360) / arcd);
      ctx.save();
      ctx.font = 'bold 30px Helvetica, Arial';
      const text = options[index]
      ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
      ctx.restore();
    }

    function easeOut(t, b, c, d) {
      const p = t/d
      const ts = (p)*p;
      const tc = ts*p;
      return b+c*(tc + -3*ts + 3*p);
    }
    
    drawRouletteWheel();
}

/* function addEventListener(){
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
*/

export default GamePage;        