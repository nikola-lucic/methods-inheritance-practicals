"use strict";

class Person {
    constructor(name, surname) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1);
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return `${this.name}, ${this.surname}, ${this.salary}`;
    }
    getSalary() {
        return `${this.salary}`;
    }
    increaseSalary() {
        this.salary = this.salary + this.salary / 10;
    }
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        return `${this.specialization}`;
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        return `${this.department}`;
    }
    changeDepartment(department) {
        this.department = department;
    }
}

const person = new Person("John", "Doe");

const employee = new Employee("John", "Doe", "programmer", 300);

employee.getData();
employee.getSalary();
employee.increaseSalary();

const developer = new Developer("John", "Doe", "programmer", 300, "frontend developer");

developer.getSpecialization();
developer.increaseSalary();

const manger = new Manager("John", "Doe", "programmer", 300, "project management");
manger.changeDepartment("HR");
manger.increaseSalary();

console.log(employee);
console.log(developer);
console.log(manger);


class WebApp {
    constructor(name, url, technologies, licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence.toUpperCase();
        this.stars = stars;
    }

    getData() {
        return `${this.name}, ${this.url},${this.technologies},${this.licence}, ${this.technologies}`
    }
    reactBased() {
        this.licence === "REACT" ? "it it React based" : "it is not React based";
    }

}

class MobileApp {
    constructor(name, platforms, licence, stars) {
        this.name = name;
        this.platforms = platforms;
        this.licence = licence.toUpperCase();
        this.stars = stars;
    }

    getData() {
        return `${this.name},${this.platforms},${this.licence},${this.stars}`;
    }
    forAndroid(){
        this.licence === "ANDROID" ? "it it Android based" : "it is not Android based";
    }
}