"use strict";

(function() {

    function WebApp(name, url, technology, licence, stars) {
        this.name = name;
        this.technology = technology;
        this.url = url;
        this.licence = licence;
        this.stars = stars;
    }

    WebApp.prototype.getData = function() {
        console.log(this.name, this.url, this.technology, this.licence, this.stars);
    }

    WebApp.prototype.reactBased = function() {
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

    MobileApp.prototype.getData = function() {
        console.log(this.name, this.platform, licence, this.stars);
    };

    MobileApp.prototype.forAndroid = function() {
        if (this.platform.toUpperCase() === "ANDROID") {
            console.log("It has Android")
            return
        }
        console.log('it doesn\'t have Android');
    }

    var sharedMethods = {
        isCCLicence: function() {
            if (this.licence === "CCLicence") {
                console.log("it has CCLicence")
                return;
            }
            console.log('it doesn\'t have Android');
        },
        like: function() {
            this.stars += +1;
        },
        showStars: function() {
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

})()