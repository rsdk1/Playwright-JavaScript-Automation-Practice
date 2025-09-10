
import { test, expect } from '@playwright/test';
test.skip('has title', async ({ page }) => {

    var url = 'https://practicetestautomation.com/practice-test-login/';
    await page.goto(url);

    const username=process.env.LOGIN_USERNAME;
    const password=process.env.LOGIN_PASSWORD;
    await page.locator('#username').nth(0).fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#submit').click();


 });

test('toHaveTitle', async ({ page }) => {
    var url = 'https://practicetestautomation.com/practice-test-login/';
    await page.goto(url);
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");
   
    
  });

  test('toBeVisible', async ({ page }) => {
    var url="https://www.flipkart.com";
    await page.goto(url);
    var loginImage = page.locator("//img[@class='-dOa_b L_FVxe']");
    await expect(loginImage).toBeVisible();
   // await expect(page.locator("//img[@class='-dOa_b L_FVxe']")).toBeVisible();
   
    
  });


 test('click', async ({ page }) => {
    var url="https://www.letskodeit.com/practice?utm_source=chatgpt.com";

      await page.goto(url);
      var SearchBox2 = await page.locator("//input[@id='disabled-button']").click();
      // var SearchBoxContent = await  page.locator("//input[@id='enabled-example-input']").toBeDisabled();
     // await SearchBox2.toBeDisabled();
   
    
});#carselect

      test('toBeDisabled', async ({ page }) => {
    var url="https://www.letskodeit.com/practice?utm_source=chatgpt.com";

      await page.goto(url);
      var SearchBox2 = await page.locator("//input[@id='disabled-button']").click();
     await expect(page.locator("//input[@id='enabled-example-input']")).toBeDisabled();
     // await SearchBox2.toBeDisabled();
   
    
});


    test('toBeChecked', async ({ page }) => {
    var url="https://www.letskodeit.com/practice?utm_source=chatgpt.com";
      await page.goto(url);
      await page.locator("//input[@id='bmwcheck']").click();
      await expect(page.locator("//input[@id='bmwcheck']")).toBeChecked();

   
    
   });


   test('toHaveAttribute', async ({ page }) => {
    var url="https://www.flipkart.com";
   await page.goto(url);
    await expect(page.locator('//a[@title="Advertise"]')).toHaveAttribute('class','yx2hEq');

   
    
  });

     test ('toHaveText', async ({ page }) => {
     var url="https://www.demoblaze.com/index.html";
      await page.goto(url);
      await expect (page.locator("//a[normalize-space()='Nokia lumia 1520']")).toHaveText("Nokia lumia 1520");
        
   
    
   });

  test('toContainText', async ({ page }) => {
   var url="https://www.amazon.in/";
    await page.goto(url);
    await clickAmazon(page);
    await expect (page.locator("//span[@id='nav-link-accountList-nav-line-1']")).toContainText("Hel");
    
   
    
});

 test('toHaveValue', async ({ page }) => {
    var url="https://www.flipkart.com";
  await page.goto(url);
   await page.locator("//input[@placeholder='Search for Products, Brands and More']").fill('samsung');
   await expect(page.locator("//input[@placeholder='Search for Products, Brands and More']")).toHaveValue('samsung');

   
    
});

 test('toHaveCount', async ({ page }) => {
  var url="https://www.demoblaze.com/index.html";
   await page.goto(url);
  await expect (page.locator("//input")).toHaveCount(6);
   
   
    
});

test('toBeEnabled', async ({ page }) => {
   var url="https://www.amazon.in/";
     await page.goto(url);
     await clickAmazon(page);
     var SearchBox = page.locator("//input[@id='twotabsearchtextbox']");
     await expect(SearchBox).toBeEnabled();
   
    
 });

async function clickAmazon(page){
var continueShopping = await page.locator('//button[normalize-space(.)="Continue shopping"]').isVisible();
    console.log(continueShopping);
    if(continueShopping){
        await page.locator('//button[normalize-space(.)="Continue shopping"]').click();
    }
}

  