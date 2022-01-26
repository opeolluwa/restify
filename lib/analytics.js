//load in analytics  model from from models folder
const { AnalyticsDB } = require("./../models")
class Analytics {
    //get useragent
    constructor(useragent, databaseName) {
        //get all fields from useragent payload and endpoints
        this.useragent = Object.keys(useragent);
        this.fields = [];

        //get all truthy values from the payload and hold then in this.fields
        this.useragent.forEach(element => {
            if (useragent[element]) {
                this.fields.push(element)
            }
        });

        (async function () {
            try {
                // create datastore for analytics if not exist
                await AnalyticsDB.create({ name: databaseName });
                //fetch the content of the analytics datastore
                this.store = await AnalyticsDB.findOne({ where: { name: databaseName } });
                //update the datastore with the provided values from this.fields
                this.fields.forEach(element => {
                    this.store[element]++;
                    this.store.pageCount++;
                });
            } catch (error) {
                //TODO: add logger to save save errors
                console.log(error)
            }
        })();
    }
    //TODO USE getters
    //TODO create getters that takes number of weeks, month and year and get analytics that correspond to them
    get() {
    }
    //get all analytics data  for previous month
    getLastMonth() {
        const month = 2592000000 //30 days month
    }
    //get all analytics data  for previous week
    getLastWeek() {
        const week = 604800000//milliseconds in  7 days
    }
    //get all analytics data  for previous year
    getLastYear() {
        const year = 31536000000; //milliseconds in a year 365 days
    }
}


const data = { "isYaBrowser": false, "isAuthoritative": true, "isMobile": false, "isMobileNative": false, "isTablet": false, "isiPad": false, "isiPod": false, "isiPhone": false, "isiPhoneNative": false, "isAndroid": false, "isAndroidNative": false, "isBlackberry": false, "isOpera": false, "isIE": false, "isEdge": false, "isIECompatibilityMode": false, "isSafari": false, "isFirefox": true, "isWebkit": false, "isChrome": false, "isKonqueror": false, "isOmniWeb": false, "isSeaMonkey": false, "isFlock": false, "isAmaya": false, "isPhantomJS": false, "isEpiphany": false, "isDesktop": true, "isWindows": false, "isLinux": true, "isLinux64": true, "isMac": false, "isChromeOS": false, "isBada": false, "isSamsung": false, "isRaspberry": false, "isBot": false, "isCurl": false, "isAndroidTablet": false, "isWinJs": false, "isKindleFire": false, "isSilk": false, "isCaptive": false, "isSmartTV": false, "isUC": false, "isFacebook": false, "isAlamoFire": false, "isElectron": false, "silkAccelerated": false, "browser": "Firefox", "version": "95.0", "os": "Linux 64", "platform": "Linux", "geoIp": {}, "source": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0", "isWechat": false }

const analytics = new Analytics(data)
console.log(analytics)
// module.exports = Analytics