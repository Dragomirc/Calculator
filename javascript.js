
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

  // Set the basic operations
  document.querySelectorAll(".operations").forEach(addEventListener("click",operate));

  function operate(e){
    if(e.target!==e.currentTarget){
      var clickedItem = e.target.innerHTML;
      operator = clickedItem;
      newnumber = number;
  		number = "";
  		total.innerHTML = operator;
    }
    e.stopPropagation();

  }



}
