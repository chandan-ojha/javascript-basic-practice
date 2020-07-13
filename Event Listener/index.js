/*
document.querySelector("button").addEventListener("click",myFunction);

function myFunction(){
    alert("hello!");
}
*/
//Annonomynus function

/*
document.querySelector("button").addEventListener("click",function() {
    alert("hello!");
});
*/
/*
var myVar=document.querySelector("h1");
myVar.addEventListener("click",function(){
alert("hi");
});
*/
var myVar=document.querySelector("h1");
myVar.addEventListener("mouseover",function(){

    myVar.classList.add("my-style");

});
myVar.addEventListener("mouseout",function(){

    myVar.classList.remove("my-style");

});