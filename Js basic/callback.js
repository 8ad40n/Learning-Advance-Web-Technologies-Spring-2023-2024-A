// A callback is a function passed as an argument to another function.

function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  
  // myCalculator(5, 5, function(some){
  //     console.log(some);
  // });






  // Functions running in parallel with other functions are called asynchronous

console.log("Code 1");

setTimeout(function()
{
    console.log("Code 2");
},2000);

setInterval(function()
{
    console.log("Code 2 II");
},2000);

console.log("Code 3");

// here, in setTimeout, after 2000ms or 2sec code 2 will be executed. Here,the main priority is the syncronous code. So, even after setting the ms: 0ms the output will be code1, code3 then code2

// And in setInterval, it will continue the function after 2ms again again