var numbers = [1, 2, 3, 4, 5];
var firstName = numbers[0];
var len = numbers.length;
console.log(firstName);
console.log(len);
console.log(numbers);
numbers.push(6);
console.log(numbers);
var doubleNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubleNumbers);
var evenNumber = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumber);
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(sum);
