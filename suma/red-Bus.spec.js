import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  var url = 'https://www.redbus.in/';
  await page.goto(url);
  await page.locator('//div[@class="label___57eda7 focused___a36e0e"]').click();
 var content = page.locator('//div[@class="label___57eda7 focused___a36e0e"]');
 var Suggestions = await page.$$('//div[@class="searchCategory___993266"]');
   console.log(Suggestions.length);
  //await expect(page.locator('//div[@class="searchCategory___993266"]')).toHaveText("Chennai");

//await expect(page.locator('//div[@class="searchCategory___993266"]')).selectOption("Chennai");
for (var i of Suggestions)
   {
      if(await i.textContent() == "Chennai"){
       await i.click();
      }

   }
   













});