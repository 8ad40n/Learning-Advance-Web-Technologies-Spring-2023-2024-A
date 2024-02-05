// The spread operaator is used to expand elements of an array or objeect

// copying an array
let arr1= [1,2,3];
let arr2= [...arr1]; // create a copy of arr1

// concatenating arrays
let arr3= [4,5,6];
let combineArray= [...arr1,...arr3];

// adding elements to an array 
let newArr= [0, ...arr1, 4];

function sum(a,b,c){
    return a+b+c;
}


console.log(arr2);
console.log(combineArray)
console.log(newArr)

let number =[1,2,3];
console.log(sum(...number));