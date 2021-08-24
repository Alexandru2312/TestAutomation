const Testul2 = require('../pageobjects/test2')

describe('Find Test', () => {
    it('should find rent ', async() => {
        browser.url('https://www.bayut.com/');

        await Testul2.rent();




    });
});