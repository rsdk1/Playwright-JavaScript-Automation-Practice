// @ts-check //demoblaze check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  var url = 'https://www.demoblaze.com/';
  await page.goto(url);
  var actualTitle = await page.title();
  console.log(actualTitle);
  expect(actualTitle).toBe("STORE");
   var loginElement = page.locator("a#login2");
  await loginElement.click();


  var loginPage=page.locator("input#loginusername");
  await loginPage.fill("barat");
  await page.waitForTimeout(4000);

  var loginPassword=page.locator("input#loginpassword");
  await loginPassword.fill("hello");
  await page.waitForTimeout(3000);

  var loginButtonClick=page.locator("button[onclick='logIn()']");
  await loginButtonClick.click();


  
  var closeElement= page.locator("div#logInModal button.close[data-dismiss='modal']");
  await closeElement.click();

  var clickCart=page.locator("a.nav-link").nth(3);
  await clickCart.click();
  var placeOrderButton =page.locator("button[data-target='#orderModal']");
  await clickCart.click();

  var placeOrderButton = page.locator("button.btn.btn-success");
  await expect(placeOrderButton).toBeVisible();

  var nextButtonClick=page.locator("button#next2");
  await nextButtonClick.click();


  // var sonyImage=page.locator("div#tbodyid div.col-lg-4.col-md-6.mb-4").nth(6);
  // await expect(sonyImage).toBeVisible();



  // await page.waitForTimeout(5000);
  // var closeElement= page.locator("div#logInModal button.close[data-dismiss='modal']");
  //  await closeElement.click();
  // await page.waitForTimeout(4000);

  // var loginElement=page.locator("button[onclick='logIn()']");
  // await loginElement.click();
  // await page.waitForTimeout(4000);
  
  //  var homePage=page.locator("a.nav-link span.sr-only");
  //  await homePage.click();
  //  await page.waitForTimeout(4000);

  //  var nextIcon=page.locator("span.carousel-control-next-icon");
  //  await nextIcon.click();
  //  await page.waitForTimeout(4000);


 });

