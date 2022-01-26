//load in analytics from model
const { AnalyticsDB } = require("./../models")


//try to create datastore for analytics
async function analyticsStore(fileds) {
    try {
        const store = await AnalyticsDB.create({ /*fileds*/ })
        return store

    } catch (error) {
        console.log(error)
    }
}

class Analytics {
    constructor(useragent) {
        //get all fields from useragent payload 
        this.useragent = Object.keys(useragent);
        this.fields = []
        //get all truthy values from the payload 
        this.useragent.forEach(element => {
            if (useragent[element]) {
                //TODO: add the truthy values the database 

                this.fields.push(element)
                //TODO:add analytics to database here
                //create a dabastore
                //use sequelize to get and update fileds with payload

            }
        })
        //return the truthy values
        return this.fields
    }
    //USE getters
    get() {
        //get all analytics data  using timing 
    }
    getLastMonth() {
        //get all analytics data  for previous month
    }
    getLastWeek() {
        //get all analytics data  for previous week
    }
    getLastYear() {
        //get all analytics data  for previous year
    }
}




module.exports = Analytics