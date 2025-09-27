import { test, expect } from '@playwright/test';

test('alert handling', async ({ page }) => {
  var url = 'https://testautomationpractice.blogspot.com/';
  await page.goto(url);

  page.on('dialog', dialog => dialog.accept());
  await page.locator('//button[@id="alertBtn"]').click();
page.on('dialog',dialog1 => dialog1.dismiss());
// var assert = BeforeUnload;
//assert(dialog.type() === 'beforeunload');
  //await dialog.dismiss();
  //await page.close({ runBeforeUnload: true });
  
   
  await page.locator('//button[@id="confirmBtn"]').click();
  //await page.waitForTimeout(5000)
  
  await dialog.accept('World'); 
  await page.locator('//button[@id="promptBtn"]').click();

  






});