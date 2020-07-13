var names=["Chandan","Kaushik","Tanu","Bikash","Abir"];
console.log(names);

/*
//shift opposite of pop--->remove value from first index
names.shift();
console.log(names);

//unshift opposite of push---->add value from first index
names.unshift("Bidhan");
console.log(names);
*/

//adding element using splice
/*
names.splice(2,2,"Tamim","Rayhan");
console.log(names);
*/

//remove element using splice
/*
names.splice(1,2);
console.log(names);
*/

//slice 
/*
var newArray=names.slice(1);
console.log(newArray);
console.log(names);
*/

//sort method
/*
var sortedNames=names.sort();
names.reverse();
console.log(sortedNames);
*/

var numbers=[20,5,25,45,1];
numbers.sort(function(a,b){
    return a-b;
    //return b-a;
})
console.log(numbers);

