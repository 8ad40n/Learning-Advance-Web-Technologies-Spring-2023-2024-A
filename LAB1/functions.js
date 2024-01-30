function operateOnNumbers(a,b,operation)
{
    return operation(a,b);
}
function add(x,y)
{
    return x+y;
}
function multiply(x,y){
    return x*y;
}

let resultAdd = operateOnNumbers(5,3,add);
let resultMul= operateOnNumbers(5,3,multiply);

console.log(resultAdd);
console.log(resultMul);
