"use strict";

(function() {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    function Employee(name, surname, specialization, salary) {
        this.name = name;
        this.surname = surname;
        this.specialization = specialization;
        this.salary = salary;
    }

    Employee.prototype.getSpecialization = function() {
        console.log(this.specialization);

    }

    function Manager(name, surname, department, salary) {
        this.name = name;
        this.surname = surname;
        this.department = department;
        this.salary = salary;
    }

    Manager.prototype.getDepartment = function() {
        console.log(this.department);
    }

    Manager.prototype.changeDepartment = function(department) {
        this.department = department;
    }

    var sharedMethods = {
        getData: function() {
            console.log(this.name, this.surname);
        },
        getSalary: function() {
            console.log(this.salary);
        },
        increaseSalary: function() {
            this.salary = this.salary + this.salary / 10;
        }
    };

    var firsPerson = new Person("John", "Doe");
    var secondPerson = new Person("John", "Soe");

    var firsEmployee = new Employee("John", "Doe", "programmer", 300);
    var secondEmployee = new Employee("John", "Soe", "advertizer", 500);

    var firsManager = new Manager("Bob", "Doe", "junior manger", 300);
    var secondManager = new Manager("Bob", "Soe", "junior manger", 500);

    Person.prototype.__proto__ = sharedMethods;
    Employee.prototype.__proto__ = sharedMethods;
    Manager.prototype.__proto__ = sharedMethods;

    firsPerson.getData();
    secondPerson.getData();

    firsEmployee.getData();
    firsEmployee.getSalary();
    firsEmployee.increaseSalary();

    secondEmployee.getData();
    secondEmployee.getSalary();
    secondEmployee.increaseSalary();

    firsManager.changeDepartment("analytics");
    firsManager.getDepartment();

    secondManager.changeDepartment("analytics");
    secondManager.getDepartment();

})();