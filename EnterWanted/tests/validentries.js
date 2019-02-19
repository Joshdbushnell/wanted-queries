var wanted = {}



var fillCard = (fillout, header, mke, origin, name, sex, race, height, weight, hair, offense, dow) => {
    fillout
        .click('@button')
        .waitForElementVisible('@wanted', 5000)
        .click('@wanted')
        .setValue('@header', header)
        .setValue('@mke', mke)
        .setValue('@origin', origin)
        .setValue('@name', name)
        .click('@sex')
        .setValue('@sex', sex)
        .click('@race')
        .setValue('@race', race)
        .setValue('@height', height)
        .setValue('@weight', weight)
        .setValue('@hair', hair)
        .setValue('@offense', offense)
        .click('@dow')
        .setValue('@dow', dow)



}




/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

module.exports = {
    before: browser => {
        wanted = browser.page.objectPage()
        wanted.navigate()


            .waitForElementPresent('@app', 5000)
    },
    after: browser => {
        browser.end()
    },
    //Test Case https://dmutah.atlassian.net/browse/QO2JB-31
    'valid': browser => {
        wanted
            fillCard(wanted, 'abcdefghijk', 'mat', '123456789', 'John', 'M', 'W', '500', '500', 'Brown', 'Stole', '2019-02-08')
       
    },

}
        
        