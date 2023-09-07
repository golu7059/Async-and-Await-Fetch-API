// 2. Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.

function callback(manipulatedString){
    console.log(`The manipulated string is : ${manipulatedString}` );
}

function manipulateString(inputString , callback){
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}

const input = "My name is Golu Kumar Singh";
manipulateString(input,callback);