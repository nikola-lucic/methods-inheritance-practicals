/////////////////////////////////////////////
//ANOTHER WAY                      /////////
////////////////////////////////////////////

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = parseInt(salary);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    var fullName = Object.getPrototypeOf(Employee.prototype).getData.call(this);
    return "Name: " + fullName + ", job: " + this.job + ", salary: " + this.getSalary() + "e";
}

Employee.prototype.getSalary = function () {
    return parseInt(this.salary);
}

Employee.prototype.increaseSalary = function (increase) {
    increase = increase || 1.1
    var updatesSalary = parseInt(this.salary * increase);
    this.salary = updatesSalary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary)
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Method overriding
Manager.prototype.getData = function () {
    var employeeData = Object.getPrototypeOf(Manager.prototype).getData.call(this);
    return employeeData + ", department: " + this.getDepartment();
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}

var generalManager = new Manager("Pera", "Mikic", "Project manager", 1200, "IT");
generalManager.changeDepartment("HR")
generalManager.increaseSalary();

var output = generalManager.getData() + ", department: " + generalManager.getDepartment();
generalManager.increaseSalary()
output = generalManager.getData();

console.log(output);

function WebApp(name, url, technology, licence, stars) {
    this.name = name;
    this.url = url;
    this.technology = technology;
    this.licence = licence;
    this.stars = parseInt(stars);
}

WebApp.prototype.getData = function () {
    return this.name, this.url, this.technology, this.licence, this.stars;
}
WebApp.prototype.reactBased = function () {
    this.technology.toUpperCase() === "REACT" ? console.log("it is React based") : console.log("it's not React based");
}

function MobileApp(name, platform, licence, stars) {
    this.name = name;
    this.platform = platform;
    this.licence = licence;
    this.stars = parseInt(stars);
}

MobileApp.getData = function () {
    return this.name, this.platform, this.licence, this.stars;
}

MobileApp.prototype.forAndroid = function () {
    this.platform.toUpperCase() === "ANDROID" ? console.log("it is Android based") : console.log("it's not Android based");
}

function SharedMethods(name, url, technology, platform, licence, stars) {
    WebApp.call(this, name, url, technology, licence, stars);
    MobileApp.call(this, name, platform, licence, stars);
}

SharedMethods.prototype = Object.create(WebApp.prototype);
SharedMethods.prototype = Object.create(MobileApp.prototype);

SharedMethods.prototype.constructor = SharedMethods;

sharedMethods.prototype.isCCLicence = function () {
    this.licence.toUpperCase() === "CCLICENCE" ? console.log("it has CLicence") : console.log("it has not CLicence");
}
sharedMethods.prototype.like = function () {
    this.like += 1;
}

SharedMethods.prototype.getData = function () {
    var dataOfWebApp = Object.getPrototypeOf(WebApp.prototype).getData.call(this);
    var dataOfMobileApp = Object.getPrototypeOf(MobileApp.prototype).getData.call(this);
    return "Web App: " + dataOfWebApp + "\n" + "Mobile App: " + dataOfMobileApp;
}

var firstWebApp = new WebApp("Facebook", "www.bubble.com", "react", "CCLicence", 3);
var secondWebApp = new WebApp("Twitter", "www.bubble.com", "angular", "standard", 2);

var sharedMethods = new SharedMethods(name, url, technology, platform, licence, stars)


firstWebApp.reactBased();
secondWebApp.reactBased();

console.log(firstWebApp);
console.log(secondWebApp);