
window.onload = function(){
  var number = "";
  var newNumber = "";
  var operator = "";
  var total = document.getElementById("screen");
  total.innerHTML = "0";
  // Set the first number to be used in the operation
  document.getElementById("numbers").addEventListener("click",setNumber);

  function setNumber(e){
    if(e.target!==e.currentTarget){
      var clickedItem = e.target.innerHTML;
      number+=clickedItem;
    }
    if(number.length > 7){
      total.innerHTML = "Err";
      number = "";
    }else{
      total.innerHTML = number;
    }

    e.stopPropagation();
  }
  // Set the equals operator
  document.getElementById("equals").addEventListener("click",equal);
  function equal(){
  if (operator === "+"){
    number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
  } else if (operator === "-"){
    number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
  } else if (operator === "/"){
    number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
  } else if (operator === "*"){
    number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
  }
  total.innerHTML = number;

  number = "";
  newnumber = "";
  }

  // Set the display of the basic operations, but equals
  document.querySelectorAll(".operations").forEach(addEventListener("click",operate));

  function operate(e){
    if(e.target!==e.currentTarget && e.target.id !== "equals"){
      var clickedItem = e.target.innerHTML;
      operator = clickedItem;
      if(operator === "." && number.indexOf(".") == -1){
        number += operator;
        total.innerHTML = number;
      }else{
        newnumber = number;
  		  number = "";
        total.innerHTML = operator;
      }
    }
    e.stopPropagation();

  }





}
