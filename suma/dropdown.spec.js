import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  var url = 'https://www.letskodeit.com/practice?utm_source=chatgpt.com';
  await page.goto(url);
 await page.locator("//select[@id='carselect']").selectOption("Benz");
 //await page.locator('//select[@id="carselect"]//option').selectOption("Benz");
 


});