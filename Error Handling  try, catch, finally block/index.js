//Error handiling -> try,catch,finally,throw
//try.....catch handle run time errors
//Error objects
//The finally statement --> execute code,after try and catch 

try{
    //code test
    alert("Hi Everyone");
    alert(x);
   // alert("Bye Everyone");

}catch(err){
   //handle error
   //alert("Inside Catch block");
   //console.log("Inside Catch block");
   console.log(err);
   //console.log(err.name);
   //console.log(err.message);

}finally{
    alert("Bye Everyone");
}