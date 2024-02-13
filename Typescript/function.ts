// arrow function:
let addNumber= (a: number, b:number): number => a + b;

// let addNumber= (a: number, b:number): number => {
//     return a+b;
// };

console.log(addNumber(10,20));

// optional parameter:
function addNumber1(a:number, b:number, c?:number): number{ // c?: number means c is optional
    return a+b+(c??0);  // c??0 means if c is undefined then use 0
}
console.log(addNumber1(10,20));