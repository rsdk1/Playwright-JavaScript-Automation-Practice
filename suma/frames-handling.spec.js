import { test, expect } from '@playwright/test';

test('frames handling', async ({ page }) => {
  var url = 'https://ui.vision/demo/webtest/frames/';
  await page.goto(url);
  var allframes = await page.frames();
  console.log(allframes.length)

  const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
  await frame1.locator('//input[@name="mytext2"]').fill("hello")

// await page.locator('//input[@name="mytext2"]').fill("hello suma");



  const frame2 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
  await frame2.locator('//input[@name="mytext1"]').fill("hello women")
    await page.waitForTimeout(5000);



  






});