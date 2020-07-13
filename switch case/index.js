/*var digit=prompt("Enter any digit: ")

switch(digit){
    case "0":
        console.log("Zero");
        break;

    case "1":
        console.log("One");
        break;

    case "2":
        console.log("Two");
        break;

    case "3":
        console.log("Three");
        break;

    case "4":
        console.log("Four");
        break;

    case "5":
        console.log("five");
        break;
    
    case "6":
        console.log("Six");
        break;

    case "7":
        console.log("Seven");
        break;

    case "8":
        console.log("Eight");
        break;

    case "9":
        console.log("Nine");
        break;

    default:
        console.log("Not a digit");
}
*/

var letter=prompt("Enter any letter: ");
lette=letter.toLowerCase();

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}