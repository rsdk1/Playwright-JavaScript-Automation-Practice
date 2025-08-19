
import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {

    var url = 'https://practicetestautomation.com/practice-test-login/';
    await page.goto(url);

    const username=process.env.LOGIN_USERNAME;
    const password=process.env.LOGIN_PASSWORD;
    await page.locator('#username').nth(0).fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#submit').click();


});