// class concept 
/*class Employee {
    id:number=100;
    name:string="Ravi Kumar";
    salary:number=12000;

    empInfo():void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
    }
}
let emp1 = new Employee();
emp1.empInfo();
let emp2 = new Employee();
emp2.empInfo();
*/
// constructor concept 
/*
class Employee {
    constructor() {
        console.log("object created...")
    }
    disInfo() : void {
        console.log(" employee function");
    }
}
let emp1 = new Employee();
emp1.disInfo();
emp1.disInfo();
emp1.disInfo();
*/
// parameterized cosntructor 
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (salary === void 0) { salary = 8000; }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.disInfo = function () {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("salary is " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(100, "Ravi", 12000);
emp1.disInfo();
var emp2 = new Employee(101, "Ajay", 14000);
emp2.disInfo();
var emp3 = new Employee(102, "Mahesh");
emp3.disInfo();
var emp4 = new Employee(103);
emp4.disInfo();