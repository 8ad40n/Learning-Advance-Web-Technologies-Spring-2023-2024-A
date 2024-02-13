var Employee = /** @class */ (function () {
    function Employee(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name, ", Age = ").concat(this.age, ", IsOkay = ").concat(this.isOkay));
    };
    return Employee;
}());
var emp1 = new Employee(1, "Badhon Nath Joy", 22, true);
emp1.display();
