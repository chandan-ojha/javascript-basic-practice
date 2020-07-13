/*check which number is large
var num1=parseInt(prompt("Enter number1: "));
var num2=parseInt(prompt("Enter number2: "));
var num3=parseInt(prompt("Enter number3: "));

if(num1>num2 && num1>num3)
   console.log("Large number: "+num1);
else if(num2>num1 && num2>num3)
   console.log("Large number: "+num2);
 else 
   console.log("Large number: "+num3);
*/

//vowel consonant
var letter =prompt("Enter a letter: ");
letter=letter.toLowerCase();
if(letter=="a" ||letter=="e"||letter=="i"||letter=="o"|| letter=="u")
  console.log("Vowel")
else
   console.log("Consonant")