import {test} from 'playwright/test';

test('Basic Navigation', async({page})=>{

    await page.goto('https://gitlab.com/');

    await page.waitForTimeout(3000);
    await page.reload();

})

test.only('Interacting with the Web Elements', async ({page})=>{

    await page.goto('https://gitlab.com/');

    await page.click('#onetrust-accept-btn-handler');
    await page.locator('#be-navigation-mobile').getByRole('link', {name: 'Get free trial'}).click();

})