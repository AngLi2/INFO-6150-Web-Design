var text = document.getElementsByClassName("dropDownTextArea");
var tableRow = document.getElementsByClassName("tableRow");
var box = document.getElementsByName("box");
var button = document.getElementById("button");
button.disabled=true;
button.style.backgroundColor="gray";
button.style.border="2px solid gray";
for(i = 0; i < box.length; i++){
  text[i].style.display = "none";
}
function checkbox() {
  for (i = 0; i < box.length; i++) {
    if (box[i].checked == true) {
      tableRow[i].style.backgroundColor="#e4da91";
    } else {
      tableRow[i].style.backgroundColor="white";
    }
  }
  if(box[0].checked||box[1].checked||box[2].checked){
    button.disabled=false;
    button.style.backgroundColor="orange";
    button.style.border="2px solid orange";
  }else{
    button.disabled=true;
    button.style.backgroundColor="gray";
    button.style.border="2px solid gray";
  }
}
var time0 = 0;
function clickIcon0(){
    if (time0%2 != 0) {
      text[0].style.display = "none";
    } else {
      text[0].style.display = "table-row";
    }
  time0++;
}
var time1 = 0;
function clickIcon1(){
    if (time1%2 != 0) {
      text[1].style.display = "none";
    } else {
      text[1].style.display = "table-row";
    }
  time1++;
}
var time2 = 0;
function clickIcon2(){
    if (time2%2 != 0) {
      text[2].style.display = "none";
    } else {
      text[2].style.display = "table-row";
    }
  time2++;
}
