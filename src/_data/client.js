module.exports = {
    name: "Bug Guys Pest Control",
    email: "info@wekillthebugs.net",
    phoneForTel: "919-630-8966",
    phoneFormatted: "(919) 630-8966",
    address: {
        city: "Sanford",
        state: "NC",
        zip: "27332",
        country: "US",
        mapLink: "https://maps.app.goo.gl/J2YVX1KWUuF6hDH48",
    },
    socials: {
        facebook: "https://www.facebook.com/WeKillTheBugs/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.wekillthebugs.net",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
