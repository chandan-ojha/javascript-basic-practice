// forEach ,map, filter
var numbers=[2,3,4,5,30,55,34,11,14];
var squareNumbers=numbers.map(function(x){
    return x*x;
  
});
console.log(squareNumbers);


//filter function
var numbers=[2,3,4,5,30,55,34,11,14];
var newNumbers=numbers.filter(function(x){
    return x>10;
  
});
console.log(newNumbers);

