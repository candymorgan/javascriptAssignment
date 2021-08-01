let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];
//divide the elements in array1 with elements in array2 respectively and store the result in a new array.
let a = array1[0] / array2[0];
let b = array1[1] / array2[1];
let c = array1[2] / array2[2];
let d = array1[3] / array2[3];
let e = array1[4] / array2[4];
let result = [a, b, c, d, e]; // or [10, 23, 18, 20 ,60]
console.log(result);

//Multidimensional array, print out (10, 8, 13, 136 and 4).

let arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9, [[10, 11, 12, [13, 4, 112]], 136, 14]];
let seen = [10, 8, 13, 136, 4];
// let ten = arr[5][0][0];
// console.log(ten);

// let eight = arr[3];
// console.log(eight);

// let thirteen = arr[5][0][3][0];
// console.log(thirteen);

// let oneTreSix = arr[5][1];
// console.log(oneTreSix);

// let four = arr[1][0];
// console.log(four);

for(let i = 0; i < arr.length; i++){
    let ser = arr[i];
    if(arr[i] == 4){
        console.log(ser[i]);
    }  
        
    }
    
    // console.log(arr[i]);



//string concantenation
let sentence = ["javascript", "web", "CapacityBay"];
let compltSentence = "I am a " + sentence[1] + " developer at " + sentence[2] + " and i love " + sentence[0];
console.log(compltSentence);

let word = "Generalization"
let char1 = word[word.length - 4];
console.log(char1);

var fruits = ["Orange", "Apple", "Guava", "Lemom"];
fruits.unshift("Pea", "Bananna");
fruits.push("Avocado", "Mango");
console.log(fruits);




function checkResult() {
    let sname = document.getElementById("stdName").value;
    let scor1 = document.getElementById("scr1").value;
    let scor2 = document.getElementById("scr2").value;
    let sum = parseInt(scor1) + parseInt(scor2);
    let swipe = document.querySelector(".displayMsg");

    function message() {
        let resultMsg = document.querySelector(".displayh3");
        if (sum <= 45) {
            resultMsg.textContent = `${sname.toUpperCase()} failed the test and has scored ${sum} with grade F`;
        } else if (sum <= 50) {
            resultMsg.textContent = `${sname.toUpperCase()} failed the test and has scored ${sum} with grade E`;
        } else if (sum <= 60) {
            resultMsg.textContent = `${sname.toUpperCase()} Will resit the test and has scored ${sum} with grade D`;
        } else if (sum <= 70) {
            resultMsg.textContent = `${sname.toUpperCase()} Passsed the test and has scored ${sum} with grade C`;
        } else if (sum <= 80) {
            resultMsg.textContent = `${sname.toUpperCase()} Has Good result and has scored ${sum} with grade B`;
        } else if (sum <= 100) {
            resultMsg.textContent = `${sname.toUpperCase()} Has Excellent result and has scored ${sum} with grade A`;
        }else{
            resultMsg.textContent = "Score has Exceeded pass Mark!!";
        }

        swipe.style.display = "block";


    }

    message();
}






//Write a function that checks if a number is Even or Odd

function checkNumber(num){ 
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
    let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

        for(let i = 0; i < oddNumbers.length; i++){
            if(num === oddNumbers[i]){
                console.log(oddNumbers[i] + " Is an Odd Number");
                
            }else if(num === evenNumbers[i]){
                console.log(evenNumbers[i] + " Is an Even Number");
            }
        }

    return num;
    
}
checkNumber(); // pass any number from 1 to 30 as the argument

function seperate(){
    let oddNum = [];
    let evenNum = [];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNum.push(numbers[i]);
    
    }else{
        oddNum.push(numbers[i]);
        
    }
}

console.log(oddNum);
console.log(evenNum);
}
seperate();




// Write a function that calculates age from date of birth

function calculateAge(year){
    let age = 2021 - year;

    if(age >= 18){
        console.log("You are " + age + " and you are an Adult");
    }else{
        console.log("You are " + age + " and you are Young");
    }
}
calculateAge();
// Pass your year of birth as the function Argument 


