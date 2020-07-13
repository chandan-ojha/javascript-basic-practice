var myVar= document.querySelector("#paraId");
function addstyle(){
    /*
    myVar.style.color="red";
    myVar.style.fontSize="3rem";
    myVar.style.fontWeight="bold";
    myVar.style.fontStyle="italic";
    */
   myVar.classList.add("para-style");
}

function removestyle(){
    myVar.classList.remove("para-style");
}