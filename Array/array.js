
let fruits = ["apple", "banana", "mango", "orange", "grapes"];


let userFruit = prompt("Enter the name of your favorite fruit:");


if (fruits.includes(userFruit.toLowerCase())) {
    alert("Yes! " + userFruit + " is in the list.");
} else {
    alert("Sorry! " + userFruit + " is not in the list.");
}
