// oppgave 1

let num1 = ["a", "b", "c", "d", "e", "f"];

console.log(num1[0]);

// oppgave 2

let num2 = ["a", "b", "c", "d", "e", "f"];

var myL = num2.length;
console.log(num2[myL - 1]);

// oppgave 3

function plus(array) {
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(plus([3, 66, 45]));


function multiply(array) {
  var sum = 1;

  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}

console.log(multiply([3, 66, 45]));


// oppgave 4

