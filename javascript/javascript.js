
function getddl () {
  document.getElementById("lbmess").innerHTML = (""+formid.ddselect [formid.ddselect.selectedIndex].text)
}


var valueList = document.getElementById("valueList");
var text = ""
var listArray = [];

var checkboxes = document.querySelectorAll(".checkbox");

for(var checkbox of checkboxes) {
  checkbox.addEventListener("click", function(){
    if(this.checked == true) {
      listArray.push(this.value);
      valueList.innerHTML = text + listArray.join("-");
    } else{
      listArray = listArray.filter(e => e !== this.value);
      valueList.innerHTML = text + listArray.join("-");
    }
  })
  
}

var valueList1 = document.getElementById("valueList1");
var text = ""
var listArray = [];

var checkboxes = document.querySelectorAll(".checkbox1");

for(var checkbox of checkboxes) {
  checkbox.addEventListener("click", function(){
    if(this.checked == true) {
      listArray.push(this.value);
      valueList1.innerHTML = text + listArray.join("-");
    } else{
      listArray = listArray.filter(e => e !== this.value);
      valueList1.innerHTML = text + listArray.join("-");
    }
  })
}


var valueList2 = document.getElementById("valueList2");
var text = ""
var listArray = [];

var checkboxes = document.querySelectorAll(".checkbox2");

for(var checkbox of checkboxes) {
  checkbox.addEventListener("click", function(){
    if(this.checked == true) {
      listArray.push(this.value);
      valueList2.innerHTML = text + listArray.join("-");
    } else{
      listArray = listArray.filter(e => e !== this.value);
      valueList2.innerHTML = text + listArray.join("-");
    }
  })
  
}
