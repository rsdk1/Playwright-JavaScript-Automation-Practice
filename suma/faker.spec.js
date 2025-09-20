import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
test('invalid password', async ({ page }) => {
var url = 'https://practicetestautomation.com/practice-test-login/';

await page.goto(url);
var userName = faker.person.fullName();
console.log(userName)
await page.fill("//input[@id='username']", userName);
var password = faker.internet.password(8);
await page.fill("//input[@id='password']", password);
await page.locator("//button[@id='submit']").click();

//await page.locator("//div[@id='error']").toHavetext("Your password is invalid!");

    });