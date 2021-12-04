let x,y;
function button_(variable)
{
 y=   document.getElementById("input-text").value+=variable;
}
function equal(){
   x= eval(y);
   console.log(x);
   document.getElementById("input-text").value=x;
}
function Delete()
{
    document.getElementById("input-text").value="";
}
function Del_alt()
{
    alert("Your input value have been deleted");
}
function ans_alt()
{
    alert("your answer is : "+x);
}
