"use strict";

(function() {

    function App(name, licence, stars) {
        this.name = name;
        this, licence = licence;
        this.stars = stars;
    }

    App.prototype.isCCLicence = function() {
        if (this.licence === "CCLicence") {
            console.log("it has CCLicence")
            return;
        }
        console.log('it doesn\'t have Android');
    }

    App.prototype.like = function() {
        this.stars += +1;
    }

    App.prototype.showStars = function() {
        console.log(this.stars);
    }

    function WebApp(name, url, technology, licence, stars) {
        App.call(this, name, licence, stars);
        this.technology = technology;
        this.url = url;
    }

    WebApp.prototype = Object.create(App.prototype);
    WebApp.prototype.constructor = WebApp;

    WebApp.prototype.reactBased = function() {
        if (this.technology.toUpperCase() === "REACT") {
            console.log("it has React")
        }
        console.log('it doesn\'t have React');
    }

    function MobileApp(name, platform, licence, stars) {
        App.call(this, name, licence, stars);
        this.platform = platform;
    }

    MobileApp.prototype = Object.create(App.prototype);
    MobileApp.prototype.constructor = MobileApp;

    MobileApp.prototype.forAndroid = function() {
        if (this.platform.toUpperCase() === "ANDROID") {
            console.log("It has Android")
            return
        }
        console.log('it doesn\'t have Android');
    }

    var firstWebApp = new WebApp("Facebook", "www.bubble.com", "react", "CCLicence", 3);
    var secondWebApp = new WebApp("Twitter", "www.bubble.com", "angular", "standard", 2);

    firstWebApp.isCCLicence();
    secondWebApp.isCCLicence();

    secondWebApp.showStars();
    secondWebApp.like();

    console.log(firstWebApp);
    console.log(firstWebApp);

    var firstMobileApp = new MobileApp("Facebook", "Ios", "CCLicence", 3);
    var secondMobileApp = new MobileApp("Twitter", "react", "standard", 1);

    firstMobileApp.isCCLicence();
    secondMobileApp.isCCLicence();

    firstMobileApp.showStars();
    secondMobileApp.like();

    console.log(firstMobileApp);
    console.log(secondMobileApp);
})();