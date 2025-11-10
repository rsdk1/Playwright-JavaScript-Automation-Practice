import { test, expect } from '@playwright/test';

test('visible screenshot', async ({ page }) => {
    var url = 'https://www.youtube.com/';
    await page.goto(url);
    await page.screenshot({path:'suma/screenshots/'+Date.now()+'homepage.png'});
});
     

test.only('Element screenshot',async({ page }) => {
    var url="https://www.naukri.com/nlogin/login?URL=https://www.naukri.com/mnjuser/homepage";
    await page.goto(url);
    await page.locator('//*[@id="loginForm"]/div[2]').screenshot({path:'suma/screenshots/'+Date.now()+'Element.png'});
});


test.only('screenshot',async({ page }) => {
var url = 'https://practicetestautomation.com/practice-test-login/';
    await page.goto(url);
    await page.locator('#Username').fill('student');
    await page.locator('#Password').fill('Password123');
    await page.locator('#Submit').click()
    //await page.locator('//*[@id="loginForm"]/div[2]').screenshot({path:'suma/screenshots/'+Date.now()+'Element.png'});
});









