class Person{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }

    speak()
    {
        console.log(`Hello! My name is ${this.name}.`);

    }
}
// class inheritance 
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name}'s grade is ${this.grade}.`);
    }
}

const john = new Person("John", 20);
john.speak();
console.log();

const alice = new Student("Alice", 22, 95);
alice.speak();
alice.study();
console.log();

console.log(Object.keys(alice));
console.log(Object.values(alice));
console.log(Object.entries(alice));

