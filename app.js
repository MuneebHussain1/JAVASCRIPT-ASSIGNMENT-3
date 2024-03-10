// Chapter 12 to 13




// Question no 1

var input = prompt("Please enter a character:");


if (!isNaN(input) && input !== "") {
    console.log("The given input is a number.");
} else if (input >= "A" && input <= "Z") {
    console.log("The given input is an uppercase letter.");
} else if (input >= "a" && input <= "z") {
    console.log("The given input is a lowercase letter.");
} else {
    console.log("Invalid input.");
}



// Question no 2


var num1 = parseInt(prompt("Enter the first integer:"));

var num2 = parseInt(prompt("Enter the second integer:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter two integers.");
} else {

    let larger;
    if (num1 > num2) {
        larger = num1;
    } else {
        larger = num2;
    }

    var areEqual = num1 === num2;

    console.log(`The larger integer is ${larger}.`);
    console.log(`Are the two integers equal? ${areEqual}.`);
}


// Question no 3


var num = parseFloat(prompt("Enter a number:"));

if (isNaN(num)) {
    console.log("Invalid input. Please enter a number.");
} else {

    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Question no 4


var char = prompt("Enter a character:").toLowerCase();

if (char.length !== 1) {
    console.log("Invalid input. Please enter a single character.");
} else {

    var vowels = "aeiou";
    var isVowel = vowels.includes(char);

    console.log(`Is the character a vowel? ${isVowel}.`);
}


// Question no 5


var correctPassword = "mypassword";

var userPassword = prompt("Please enter your password:");

if (!userPassword) {
    console.log("Please enter your password.");
} else {

    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}


// Question no 6

let greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}



// Question no 7


var time = prompt("Enter the time in 24-hour clock format (e.g. 1900 for 7pm):");

if (isNaN(time) || time.length !== 4 || (time[0] < '0' || '9' < time[0]) || (time[1] < '0' || '9' < time[1]) || (time[2] < '0' || '3' < time[2]) || (time[3] !== '0' && time[3] !== '0')) {
  console.log("Invalid time. Please enter a valid time in 24-hour clock format.");
} else {

  var timeNum = parseInt(time);

  if (timeNum < 1200) {
    console.log("Good morning");
  } else if (timeNum < 1700) {
    console.log("Good afternoon");
  } else if (timeNum < 2359) {
    console.log("Good evening");
  } else if (timeNum === 1200) {
    console.log("Good midnight");
  } else {
    console.log("Invalid time. Please enter a valid time in 24-hour clock format.");
  }
}