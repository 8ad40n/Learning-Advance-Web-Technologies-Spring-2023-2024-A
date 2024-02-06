var a = 10;
var b = "Hello";
var c = true;
function add(a, b) {
    return a + b;
}
var p = { id: 1, name: "John" };
// type union: here, either number or string 
var y;
y = 10;
// literal type:
var z;
z = "Red";
// Any:
var data = "Something";
// Enum type:
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blur"] = 2] = "blur";
})(Color || (Color = {}));
;
var color = Color.red;
// tuple type:
var employee;
employee = [1, "Steve"];
console.log(a);
console.log(b);
console.log(c);
console.log(add(10, 20));
console.log(p);
console.log(y);
console.log(z);
console.log(data);
console.log(color);
console.log(employee);
