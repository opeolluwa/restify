class Analytics {
    constructor(domain) {
        //TODO:  get  data from  database using domain name
        this.domain = domain

        return {
            domain: this.domain,
            page_count: 30,
            browser: {
                "opera mini": 300,
                "safari mobile": 125,
                "google chrome": 6000,
                "internet explorer": 125
            },
            "operating system": {
                "OS X": 123,
                "Ubuntu": 5000,
                "Kali": 24556,
                "Windows": 2345,
                "iOS": 2341,
                "Android": 7000,
                "Cent OS": 2234,
                "Parrot": 3342,
                "others": 234
            },
            "screen resolution": {
                mobile: 21345,
                desktop: 228401,
                "larger screen": 33456
            }
        }
    }
}

module.exports = Analytics



// console.log(nethbooks)