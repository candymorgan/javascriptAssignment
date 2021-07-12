let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];
//divide the elements in array1 with elements in array2 respectively and store the result in a new array.
let a = array1[0] / array2[0];
//console.log(a); // = 10

let b = array1[1] / array2[1];
//console.log(b); // = 23

let c = array1[2] / array2[2];
//console.log(c); // = 18

let d = array1[3] / array2[3];
//console.log(d); // = 20

let e = array1[4] / array2[4];
//console.log(e); // = 60

let result = [a, b, c, d, e]; // or [10, 23, 18, 20 ,60]
console.log(result); 

//Multidimensional array, print out (10, 8, 13, 136 and 4).

let arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9, [[10, 11, 12,[13, 4, 112]], 136, 14]];
let ten = arr[5][0][0];
console.log(ten);

let eight = arr[3];
console.log(eight);

let thirteen = arr[5][0][3][0];
console.log(thirteen);

let oneTreSix = arr[5][1];
console.log(oneTreSix);

let four = arr[1][0];
console.log(four);


//string concantenation
let sentence = ["javascript", "web", "CapacityBay"];
let compltSentence = "I am a " + sentence[1] + " developer at " + sentence[2]  + " and i love " + sentence[0];
console.log(compltSentence);

let word = "Generalization"
let char1 = word[word.length - 4];
console.log(char1);


 var fruits = ["Orange" , "Apple", "Guava", "Lemom"];
 fruits.unshift("Pea", "Bananna");
 fruits.push("Avocado", "Mango");
 console.log(fruits);