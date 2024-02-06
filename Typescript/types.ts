let a: number = 10;
let b: string = "Hello";
let c: boolean = true;

function add (a:number, b:number): number{
    return a+b;
}
type person= { id:number, name: string};
let p:person= { id:1, name: "John"};

// type union: here, either number or string 
let y: number | string;
y= 10;


// literal type:
let z: "Red" | "Green" | "Blue";
z= "Red";


// Any:
let data: any = "Something";


// Enum type:
enum Color{red, green, blur};
let color: Color =  Color.red;


// tuple type:
let employee: [number, string];
employee= [1,"Steve"];


console.log(a);
console.log(b);
console.log(c);

console.log(add(10,20));

console.log(p);

console.log(y);

console.log(z);

console.log(data);

console.log(color);

console.log(employee);
