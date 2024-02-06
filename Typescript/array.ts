let numbers: number[]= [1,2,3,4,5];

let firstName: number = numbers[0];

let len : number = numbers.length;

console.log(firstName);
console.log(len);

console.log(numbers);
numbers.push(6);
console.log(numbers);


let doubleNumbers: number[] = numbers.map((num: number) => num * 2);
console.log(doubleNumbers);

let evenNumber: number[]= numbers.filter((num: number) => num % 2 == 0);
console.log(evenNumber);

let sum: number = numbers.reduce((prev: number, next: number)=> prev + next);
console.log(sum);

