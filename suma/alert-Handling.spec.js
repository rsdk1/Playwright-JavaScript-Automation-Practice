import { test, expect } from '@playwright/test';

test('alert handling', async ({ page }) => {
  var url = 'https://testautomationpractice.blogspot.com/';
  await page.goto(url);

//   page.once('dialog', async dialog =>
//      console.log(dialog.message()),
//      console.log(dialog.type()),
//      await dialog.accept()
//     );
page.once('dialog', async dialog => {
    console.log(dialog.type()),
    await dialog.accept()
});
  await page.locator('//button[@id="alertBtn"]').click();
  await page.waitForTimeout(5000);

//   page.once('dialog',async dialog => {
//     console.log(dialog.message()),
//      console.log(dialog.type()),
//      await dialog.accept()
// });
page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Press a b'),
    await dialog.dismiss()
});
  await page.locator('//button[@id="confirmBtn"]').click();
  await page.waitForTimeout(5000);

  page.once('dialog', async dialog => {
    console.log(dialog.type()),
    await dialog.accept("suma")
});
  await page.locator('//button[@id="promptBtn"]').click();
  await page.waitForTimeout(5000);

  






});