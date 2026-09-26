module.exports = {
    name: "Bug Guys Pest Control",
    legalName: "Bug Guys LLC",
    email: "info@wekillthebugs.net",
    // E.164 format, used for tel: links and schema
    phoneForTel: "+19196308966",
    phoneFormatted: "(919) 630-8966",
    address: {
        lineOne: "225 Sheriff Watson Rd",
        city: "Sanford",
        state: "NC",
        zip: "27332",
        country: "US",
        mapLink: "https://maps.app.goo.gl/zT2jZbXk9p2gkDVx8",
    },
    geo: {
        latitude: 35.4415,
        longitude: -79.1414,
    },
    socials: {
        facebook: "https://www.facebook.com/WeKillTheBugs/",
    },
    // Used in LocalBusiness schema
    priceRange: "$$",
    areaServed: {
        state: "North Carolina",
        cities: ["Sanford", "Lillington", "Raleigh", "Apex", "Cary", "Holly Springs", "Fuquay-Varina", "Southern Pines", "Pinehurst", "Leland"],
        counties: ["Brunswick County"],
    },
    // Default social preview image (1200x630 JPG). Path is relative to the domain.
    ogImage: "/assets/images/og-image.jpg",
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.wekillthebugs.net",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
