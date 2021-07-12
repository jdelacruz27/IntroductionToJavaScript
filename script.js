//Basic Variables

// var name = "Jian";
// var surname = "Dela Cruz";
// var age = 24;
//
// console.log(name + " " + surname + " is " + age );

//Funtions

// function addNumbers(num1, num2){
//   var result = num1 + num2;
//   return result;
// }
//
// console.log(addNumbers(1, 2));
//
// // Function Exercise
// var answer = addNumbers(addNumbers(5,7), addNumbers(addNumbers(2,10), 2));
// console.log(answer);

//Data Types

//String
// var string = 'hello';
// console.log("String " + string);
//
// //Get length
// console.log(string.length);
//
// //Index of character
// console.log(string.indexOf('e'));
//
// //Chop a chunk out of a string
// console.log(string.substr(2,4));
//
// //Numbers
//
// var myNumber = 6;
//
// var myOtherNumber = 5.5;
//
// var myExpoential = 123e5;
//
// console.log(myNumber);
// console.log(myOtherNumber);
// console.log(myExpoential);
//
// //modulus
// console.log(myNumber % 2);
//
// //Boolean
// var booltrue = true;
// var boolfalse = false;
//
// console.log(booltrue);
// console.log(boolfalse);

//Arrays

// function unknown(){
//   console.log(unknown);
// }
//
// var myArray = [5,6,7,"a","b", "unknown"];
//
// console.log(myArray);
//
// // console.log(myArray[5]());
//
// //length of array
// console.log(myArray.length);
//
// myArray[0] = 8;
//
// console.log(myArray);
//
// console.log(myNewArray = myArray + [,"more", "stuff"]);
//
// console.log(myNewArray = myArray.concat(["more", "Stuff"]));
//
// console.log(typeof myNewArray);





//Type Coercion

// var myString = "5";
// var myDecimalString = "2.5";
// var myNumber = 3;
//
// console.log(parseInt(myString) + myNumber);
// console.log(parseFloat(myDecimalString) + myNumber);
// console.log(parseInt(myDecimalString) + myNumber);

// var answer = myNumber + myNumber + myString;

// console.log(answer);
// console.log(typeof answer);

//Control Flow
//
// var name = prompt("what is your name") || "Captain no-name";
//
// console.log(name);

// Loops
//while
// var x = 5;
//
// while (x < 10) {
//   console.log("loop");
//   x += 1;
// }
//
// //for Loops
// var array = [1,2,3,4,5,6];
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//
// //do while
// do {
//   console.log('loop just once');
// } while (x < 5);
//
// // for in
//
// var obj = {
//   name : "Richard",
//   age: 12,
//   school: "Bromsgrove",
//   exam_results: {
//     maths: true
//   }
// }
//
// for(var key in obj){
//   console.log(key);
//   console.log(obj[key]);
// }

//Scope

// Lexial Scope

"Code can see out but cant see in"

var outsidevariable;
var variable;

function doSomething() {
  variable = 10;
  console.log(variable);
  // console.log("do first", outsidevariable);
}

function doNext(){
  // console.log("do next", outsidevariable);
  console.log(variable);
}

doSomething();
doNext();
