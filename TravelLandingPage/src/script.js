
function toggleNav(){
  let toggle = document.getElementById("nav-links").style.display;
  if(toggle==="none"||!toggle){
      document.getElementById("nav-links").style.display = "block";
  }
  else{
    document.getElementById("nav-links").style.display = "none";
  }
  
  console.log(document.getElementById("nav-links").style.display);
}
document.getElementById('bar-icon').addEventListener('click',toggleNav);
document.querySelector('#nav-links')
  .addEventListener('click', toggleNav);