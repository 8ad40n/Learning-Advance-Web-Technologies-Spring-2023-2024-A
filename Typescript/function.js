// arrow function:
var addNumber = function (a, b) { return a + b; };
// let addNumber= (a: number, b:number): number => {
//     return a+b;
// };
console.log(addNumber(10, 20));
// optional parameter:
function addNumber1(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(addNumber1(10, 20, 30));
