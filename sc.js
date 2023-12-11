
var display = document.getElementById("cdisplay");
var data = display.value;

function keypress(NewValue){
display.value+=NewValue;
}

function acAll(){
    display.value="";
}

function delte(){
display.value=display.value.slice(0,-1);
}

function equal(){
    var a =display.value;
display.value=eval(a);
}