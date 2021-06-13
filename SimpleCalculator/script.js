const Keys = document.querySelector(".cal-keys");
const display = document.querySelector('.display')
var inputStr;
let dotOper = false;
Keys.addEventListener('click', function(e) {
  let value = e.target.value;
  let operation = e.target.dataset.oper;
  let arr = ['+','-','x','÷']
  if(value == '±')
    value = '-';
  
  // initial input validation
  if(inputStr==null){
    if(operation==="Decimal"){
      display.textContent = "0.";
      inputStr = "0.";
      dotOper = true;
    }
    else if(operation=="Symbol"){
      display.textContent = "-";
      inputStr = "-";
    }
    else if(value!="0" && operation==null){
      display.textContent = value;
      inputStr = value;
    }
  }
  // Calculating and displaying inputStr
  else if(operation=="Equals"){
    if(arr.includes(inputStr[inputStr.length-1])){
       inputStr = inputStr.slice(0, -1);
    }
    inputStr = inputStr.replace(/x/g,'*');
    inputStr = inputStr.replace(/÷/g,'/');
    //console.log(inputStr);
    inputStr = String(eval(inputStr));
    display.textContent = inputStr;
  }
  // clearing all values in display
  else if(operation=="All" ){
    display.textContent = "0";
    inputStr = null;
    dotOper = false;
  }
  //clearing previous values from display
  else if(operation=="Clear" ){
    inputStr = inputStr.substring(0, inputStr.length-1);
    if(inputStr == ""){
      inputStr = null;
      display.textContent = "0";
      dotOper = false;
    }
    else
      display.textContent = inputStr; 
  }
  else{
    if(value){
      // displaying numerical values
      if(operation==null){
        inputStr += value ;
        display.textContent = inputStr;
      }
      else if(operation=="Decimal"){
        //console.log(operation);
        if(!dotOper){
          inputStr += value ;
          display.textContent = inputStr;
          dotOper  = true;
          //console.log(dotOper);
        }
      }
      else if(!arr.includes(inputStr[inputStr.length-1])){
        inputStr += value ;
        display.textContent = inputStr;
        dotOper = false;
      }  
    } 
  }
    display.scrollLeft = display.offsetWidth;
});