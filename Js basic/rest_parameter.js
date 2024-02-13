// the rest parameter is used to collect the remaining arguments of a function into a single array.

function sum(...numbers)
{
    let total= 0;
    for (let number of numbers)
    {
        total += number;
    }
    return total;
}

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3));
