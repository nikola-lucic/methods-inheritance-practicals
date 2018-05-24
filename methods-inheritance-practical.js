"use strict";

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

Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);

}

function Manager(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}

var sharedMethods = {
    getData: function () {
        console.log(this.name, this.surname);
    },
    getSalary: function () {
        console.log(this.salary);
    },
    increaseSalary: function () {
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


function WebApp(name, url, technology, licence, stars) {
    this.name = name;
    this.technology = technology;
    this.url = url;
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technology, this.licence, this.stars);
}

WebApp.prototype.reactBased = function () {
    if (this.technology.toUpperCase() === "REACT") {
        console.log("it has React")
    }
    console.log('it doesn\'t have React');
}

function MobileApp(name, platform, licence, stars) {
    this.name = name;
    this.platform = platform;
    this.licence = licence;
    this.stars = stars;
}

MobileApp.prototype.getData = function () {
    console.log(this.name, this.platform, licence, this.stars);
};

MobileApp.prototype.forAndroid = function () {
    if (this.platform.toUpperCase() === "ANDROID") {
        console.log("It has Android")
        return
    }
    console.log('it doesn\'t have Android');
}

var sharedMethods = {
    isCCLicence: function () {
        if (this.licence === "CCLicence") {
            console.log("it has CCLicence")
            return;
        }
        console.log('it doesn\'t have Android');
    },
    like: function () {
        this.stars += +1;
    },
    showStars: function () {
        console.log(this.stars);
    }
}

var firstWebApp = new WebApp("Facebook", "www.bubble.com", "react", "CCLicence", 3);
var secondWebApp = new WebApp("Twitter", "www.bubble.com", "angular", "standard", 2);

console.log(firstWebApp);
firstWebApp.reactBased();

console.log(secondWebApp);
secondWebApp.reactBased();

var firstMobileApp = new MobileApp("Facebook", "Ios", "CCLicence", 3);
var secondMobileApp = new MobileApp("Twitter", "react", "standard", 1);

console.log(firstMobileApp);
firstMobileApp.forAndroid();

console.log(secondMobileApp);
secondMobileApp.forAndroid();

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

firstWebApp.isCCLicence();
firstWebApp.like();
firstWebApp.showStars();

secondWebApp.isCCLicence();
secondWebApp.like();
secondWebApp.showStars();

firstMobileApp.isCCLicence();
firstMobileApp.like();
firstMobileApp.showStars();

secondMobileApp.isCCLicence();
secondMobileApp.like();
secondMobileApp.showStars();

