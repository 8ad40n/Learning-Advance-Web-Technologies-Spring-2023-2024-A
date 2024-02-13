let number= [1,2,3,4,5];
let fruit= ['apple', 'banana', 'orange'];
let mixedArray= [1, 'two', {name: 'Alice'}, [7,8,9]];


console.log(number[0]);
console.log(fruit[1]);
console.log(mixedArray[2]);


number.push(6);
console.log(number);
console.log(fruit);
console.log(mixedArray);
console.log();

fruit.pop();
console.log(number);
console.log(fruit);
console.log(mixedArray);
console.log();

fruit.unshift('Pear');
console.log(number);
console.log(fruit);
console.log(mixedArray);
console.log();

number.shift();
console.log(number);
console.log(fruit);
console.log(mixedArray);
console.log();


//call back with for each loops
let num= [1,2,3,4,5];
num.forEach(function(n){
    console.log(n);
});
console.log();


// Map()
let numbers= [1,2,3,4,5];
let doubleNumbers = numbers.map(function(number){
    return number*2;
});
console.log(doubleNumbers);
console.log();

//filter - returns a new array
const n1= [1,2,3,4,5,6];
const evenNumbers= number.filter(function(num){
    return num%2 ===0;
});
console.log(evenNumbers);
console.log();