const Testul = require('../pageobjects/test1');
const Page2 = require('../pageobjects/test1page2');

describe('Find Test', () => {
    it('should find with valid credentials', async() => {
        browser.url('https://www.bayut.com/');

        await Testul.find('Dubai Marina');
        await expect(Page2.locationTxt).toBeExisting();
        await Page2.cauta();


        await expect(Page2.wait).toBeExisting();

    });
});