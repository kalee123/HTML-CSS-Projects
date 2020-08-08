const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");
const dials = document.getElementById('dials')

let position = 0;
for(let i=1;i<=60;i++){
  let node = document.createElement("div");
  node.setAttribute("class","dial-list");
  document.getElementById("dials").appendChild(node);
  if((i-1)%5==0){
    node.style.height = "25px";
  }
  node.style.transform = "rotate("+position+"deg)";
  position+=6;
}

function startClock(){
  const date = new Date();
  const seconds = ((date.getSeconds()/60)*360);
  const minute = ((date.getMinutes()/60)*360)+(date.getSeconds() * (360/3600));
  const hours = ((date.getHours()/12)*360)+(date.getMinutes()*0.5);
  sec.style.transform = `rotate(${seconds}deg)`;
  min.style.transform = `rotate(${minute}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;
  document.querySelector(".date").textContent = date.toDateString();
}


setInterval("startClock()", 1000);