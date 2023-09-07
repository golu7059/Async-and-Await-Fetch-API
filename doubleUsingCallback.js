// 1. Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function callback(num){
    return num*2;
}

function doubleArray(arr,callback){
    const doubleArr = arr.map((num) => {
        return callback(num);
    });
    return doubleArr;
}

const arr = [10,20,30,40,50];
const result = doubleArray(arr,callback);
console.log(result);