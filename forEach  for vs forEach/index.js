//for vs foreach

//for loop

/*
var numbers=[10,20,30,40,50,60,70];

for(var x=0;x<numbers.length;x++){
    console.log(numbers[x]);
}
*/

//forEach loop
/*
var numbers=[10,20,30,40,50,60,70];
numbers.forEach(myfunction)

function myfunction(x){
   console.log(x);
}
*/
/*
var numbers=[10,20,30,40,50,60,70];
numbers.forEach(function(x){
    console.log(x);
 });
*/

// suare arrays
/*
var numbers=[10,20,30,40,50,60,70];
var squareNumbers=[]
numbers.forEach(function(x){
    squareNumbers.push(x*x);
 });
 console.log(squareNumbers);

 */

var numbers=[10,20,30,40,50,60,70];
numbers.forEach(function(x,index,arr){
    arr[index]=x+5;
 });
 console.log(numbers);






 





