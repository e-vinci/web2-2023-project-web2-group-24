// eslint-disable-next-line import/no-extraneous-dependencies

import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';


const GamePage = async () => {
  clearPage();
  renderGamePage();
  
};

function renderGamePage(){ 
  const main = document.querySelector('main');
    main.innerHTML =`
        <div id="turn"></div>
        <div class="mb-5" style = "text-align:center;">
            <canvas id="canvas" width="500" height="500"></canvas>
            <div>
              <input type="button" class = "btn btn-primary btn-lg" value="spin" style="float:center;" id='spin' />
            </div>
        </div>
        <div class="position relative p-5">
            <div class="position-absolute top-0 start-0 mt-5">
                <div class="card mt-4">
                    <div class = "card-body bg-info">
                        <h5 id="player1Name" class="card-title">Joueur 1 </h5>
                    </div>
                </div>
            </div>
            <div class="position-absolute top-0 end-0 mt-5">
                <div class="card mt-4">
                    <div class = "card-body bg-success">
                        <h5 id="player2Name" class="card-title">Joueur 2 </h5>
                    </div>
                </div>
            </div>
            <div id="player3Card" class="position-absolute bottom-0 start-0">
                <div class="card">
                    <div class = "card-body bg-danger">
                        <h5 id="player3Name" class="card-title">Joueur 3 </h5>
                    </div>
                </div>
            </div>
            <div id="player4Card" class="position-absolute bottom-0 end-0">
                <div class="card mt-4">
                    <div class = "card-body bg-warning">
                        <h5 id="player4Name" class="card-title">Joueur 4 </h5>
                    </div>
                </div>
            </div>
        </div>
    }
    ` 
    players()
    renderWheel()
}



function renderWheel(){
    const options = ['INFO', 'DIET', "INFI", 'EDPH', 'IMGM', 'ENSE'];

    const colors = ["red", "green", "orange", "yellow", "blue", "purple"]
    
    let startAngle = 0;
    const arc = Math.PI / (options.length / 2);
    let spinTimeout = null;
    
    let spinTime = 0;
    let spinTimeTotal = 0;
    
    let ctx;

    document.getElementById("spin").addEventListener("click", () => {
      spin();
      setTimeout(() => {
        Navigate('/question')
      }, 5000); 
        
    });

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
      spinTimeout = setTimeout(rotateWheel, 30);
    }
    
    
    function stopRotateWheel() {
      clearTimeout(spinTimeout);
      const degrees = startAngle * 180 / Math.PI + 90;
      const arcd = arc * 180 / Math.PI;
      const index = Math.floor((360 - degrees % 360) / arcd);
      ctx.save();
      ctx.font = 'bold 30px Helvetica, Arial';
      const text = options[index]
      localStorage.setItem('categorie', text)
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

function players(){
  const player1Name = document.querySelector("#player1Name");
  const player1 = JSON.parse(sessionStorage.getItem('player1'));
  player1Name.innerHTML = player1.name;
  
  const player2Name = document.querySelector("#player2Name");
  const player2 = JSON.parse(sessionStorage.getItem('player2'))
  player2Name.innerHTML = player2.name;
  const player3Name = document.querySelector("#player3Name");
  const player3 = JSON.parse(sessionStorage.getItem('player3'));
  if (player3 === null){
    player3Name.innerHTML = "Joueur 3"
  }else{
    player3Name.innerHTML = player3.name
  }
  
  const player4Name = document.querySelector("#player4Name");
  const player4 = JSON.parse(sessionStorage.getItem('player4'))
  if (player4 === null){
    player4Name.innerHTML = "Joueur 4"
  }else{
    player4Name.innerHTML = player4.name
  }

}


export {GamePage, players} ;   