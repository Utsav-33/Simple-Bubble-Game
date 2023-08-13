var timer = 60;
var score = 0;
var hitNum=0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent=score;
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitNum;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 161; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var intervalTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeravel").textContent = timer;
    } else {
      clearInterval(intervalTimer);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",(dets)=>{
var clickedNumber=Number(dets.target.textContent);
if (clickedNumber == hitNum){
  increaseScore(); 
  makeBubble();
  getNewHit(); 
}
})

getNewHit();
runTimer();
makeBubble();
