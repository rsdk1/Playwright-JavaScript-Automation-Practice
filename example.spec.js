// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  var url = 'https://www.demoblaze.com/';
  await page.goto(url);
  var actualTitle = await page.title();
  console.log(actualTitle);
  expect(actualTitle).toBe("STORE");
  // var loginElement = page.locator("a#login2");
  // await loginElement.click();
  

  // await page.waitForTimeout(5000);
  // var closeElement= page.locator("div#logInModal button.close[data-dismiss='modal']");
  // await closeElement.click();
  // await page.waitForTimeout(4000);


  // var loginPage=page.locator("input#loginusername");
  // await loginPage.fill("barat");
  // await page.waitForTimeout(4000);

  // var loginPassword=page.locator("input#loginpassword");
  // await loginPassword.fill("hello");
  // await page.waitForTimeout(3000);

  // var loginButtonClick=page.locator("button[onclick='logIn()']");
  // await loginButtonClick.click();
  await page.waitForTimeout(4000);
  var clickCart=page.locator("a.nav-link").nth(3);
  await clickCart.click();
  // var placeOrderButton =page.locator("button[data-target='#orderModal']");
  // await clickCart.click();

  var placeOrderButton = page.locator("button.btn.btn-success");
  await expect(placeOrderButton).toBeVisible();



  // await page.waitForTimeout(5000);
  // var closeElement= page.locator("div#logInModal button.close[data-dismiss='modal']");
  // await closeElement.click();
  // await page.waitForTimeout(4000);

  // var loginElement=page.locator("button[onclick='logIn()']");
  // await loginElement.click();
  // await page.waitForTimeout(4000);
  
  // var homePage=page.locator("a.nav-link span.sr-only");
  // await homePage.click();
  // await page.waitForTimeout(4000);

  // var nextIcon=page.locator("span.carousel-control-next-icon");
  // await nextIcon.click();
  // await page.waitForTimeout(4000);


});

