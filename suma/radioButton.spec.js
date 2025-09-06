
import { test, expect } from '@playwright/test';
test('radioButton', async ({ page }) => {

    var url = 'https://www.letskodeit.com/practice?utm_source=chatgpt.com';
    await page.goto(url);

    await page.locator('//input[@id="bmwcheck"]').check();
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="bmwcheck"]').uncheck();
    await page.waitForTimeout(2000);
    await expect(page.locator('//input[@id="bmwcheck"]')).not.toBeChecked();


 });