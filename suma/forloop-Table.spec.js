import { test, expect } from '@playwright/test';

test('has table', async ({ page }) => {
    var url = 'https://testautomationpractice.blogspot.com/';
    await page.goto(url);
    for (column = 1; column <= 5; column++) {

        console.log(await page.locator('//table[@id="taskTable"]//th[' + column + ']').textContent());
    }
    for (var row = 1; row <= 4; row++) {


        for (var column = 1; column <= 5; column++) {

            console.log(await page.locator('//table[@id="taskTable"]//tr[' + row + ']//td[' + column + ']').textContent());
        }
    }
















});