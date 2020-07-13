//How to create an object
//how to print the value of object
//adding a constructor
//adding function inside a constructor

function Student(name,Age,cgpa,lang){
   
    this.name=name;
    this.Age=Age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){
        console.log(this.name);
        console.log(this.Age);
        console.log(this.cgpa);
        console.log(this.lang);

    }

}
var student1=new Student("Chandan Ojha",22,3.89,["Bengali","English"]);
//console.log(student1.name);
student1.display();

/*
var student1={
    name: "Chandan Ojha",
    Age:27,
    cgpa:3.72,
    lang:["Bengali","English"],
}
console.log(student1.name);
*/