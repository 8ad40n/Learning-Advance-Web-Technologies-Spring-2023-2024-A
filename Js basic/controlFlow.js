// for…in loop: It is often used for iterating over the keys of an object.
let x= ['a','b','c','d','e'];
for (let i in x){
    console.log(x[i]);
}
console.log();

// for…of loop: Loops through an iterable object's values (such as arrays or strings).
for(let i of x){
    console.log(i);
}