"use strict";

(() => {

    class App {
        constructor(name, licence, stars) {
            this.name = name;
            this, licence = licence;
            this.stars = stars;
        }

        isCCLicence() {
            if (this.licence === "CCLicence") {
                console.log("it has CCLicence")
                return;
            }
            console.log('it doesn\'t have Android');
        }

        like() {
            this.stars += +1;
        }

        showStars() {
            console.log(this.stars);
        }

    }

    class WebApp extends App {
        constructor(name, url, technology, licence, stars) {
            super(name, licence, stars);
            this.technology = technology;
            this.url = url;
        }

        reactBased() {
            if (this.technology.toUpperCase() === "REACT") {
                console.log("it has React")
            }
            console.log('it doesn\'t have React');
        }
    }

    class MobileApp extends App {
        constructor(name, platform, licence, stars) {
            super(name, licence, stars)
            this.platform = platform;
        }

        forAndroid() {
            if (this.platform.toUpperCase() === "ANDROID") {
                console.log("It has Android")
                return
            }
            console.log('it doesn\'t have Android');
        }
    }

    const firstWebApp = new WebApp("Facebook", "www.bubble.com", "react", "CCLicence", 3);
    const secondWebApp = new WebApp("Twitter", "www.bubble.com", "angular", "standard", 2);

    firstWebApp.isCCLicence();
    secondWebApp.isCCLicence();

    secondWebApp.showStars();
    secondWebApp.like();

    console.log(firstWebApp);
    console.log(firstWebApp);

    const firstMobileApp = new MobileApp("Facebook", "Ios", "CCLicence", 3);
    const secondMobileApp = new MobileApp("Twitter", "react", "standard", 1);

    firstMobileApp.isCCLicence();
    secondMobileApp.isCCLicence();

    firstMobileApp.showStars();
    secondMobileApp.like();

    console.log(firstMobileApp);
    console.log(secondMobileApp);
})();