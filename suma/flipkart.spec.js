import {test,expect}from '@playwright/test';
 test('has title', async ({ page })=>{
    var url="https://www.flipkart.com";
    await page.goto(url);
   var actualtitle=await page.title();
   expect (actualtitle).toBe("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
   
   // var loginElement=
   await page.locator("a._1TOQfO").nth(0).click();
   //await loginElement.click();

   var enterMobilebox=page.locator('input[autocomplete="off"][type="text"][class="r4vIwl BV+Dqf"]');
   // await page.locator.click();

   // var typeMobileNo=page.locator('input[autocomplete="off"][type="text"][class="r4vIwl BV+Dqf"]');
   //  await page.waitForTimeout(4000);
   await enterMobilebox.fill("8978976896");
   //await page.waitForTimeout(4000);
   try{

   await page.locator('button:has-text("Request OTP")').click();

   // var electronicBox= await page.locator("span.TSD49J").nth(0);
   //await expect(electronicBox).toBevisible();

   await page.waitForTimeout(4000);
   await page.locator("span.TSD49J").nth(0).click();
   await page.waitForTimeout(4000);

   console.log("yes");
   //await page.waitForTimeout(4000);
  // await page.locator("a.CDJO0-").click();
   }
   catch{
  await page.locator('button:has-text("Become a Seller")').click();
   }
   //await page.waitForTimeout(3000);
   await page.locator("input.zDPmFV").click();
   await page.locator("form.Hy6F9O.header-form-search").click();
   //await page.waitForTimeout(4000);
   await page.locator('input[placeholder="Search for products, brands and more"]').fill("iphone16 pro");
   //page.locator('button:has-text("Privacy")');
   page.locator('button:has-text("Privacy")');
   var inputBox = await page.$$("input");
   console.log(inputBox.length)
   for (var i of inputBox)
   {
      if(await i.isVisible()){
       await i.fill("barat");
      }
      else{
         console.log("element not clickable");
         
      }
   }
   //try{
      await page.locator("a.TSD49J").nth(0).click();

  // }
   //catch{
      await page.locator('button:has-text("Help Center")');
   //}


   


   




    

   





    

});