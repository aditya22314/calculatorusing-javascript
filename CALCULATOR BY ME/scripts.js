function bclick(val){ 
    document.getElementById("screen").value+=val;
}  
function cleardisplay(){
    document.getElementById("screen").value="";
} 
function equg(){
   var text= document.getElementById("screen").value;
   var result=eval(text);
   document.getElementById('screen').value=result;
}