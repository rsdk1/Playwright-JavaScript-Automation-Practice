import { test, expect } from '@playwright/test';

test('date-picker', async ({ page }) => {
    var url = 'https://testautomationpractice.blogspot.com/';
    await page.goto(url);

    await page.locator('//input[@id="datepicker"]').click();
    var selectDate = '6';
    var selectMonth = "April 2024";


    while (true) {
        var currentMonth = await page.locator(' //div[@class="ui-datepicker-title"]').textContent();
        //const currentMonth = await page.locator('.ui-datepicker-title').textContent();
        console.log("-"+currentMonth+"-");
        console.log("-"+selectMonth+"-");

        if(selectMonth == currentMonth){
            break;
        }

        
        await page.locator('.ui-datepicker-prev').click();
        await page.waitForTimeout(500);
        await page.locator('//a[@class="ui-datepicker-prev ui-corner-all"]').click();
    }
    await page.locator('//a[text()="${selectDate}"]').click();
    await page.locator("//a[@class='ui-state-default'][text()='"+ selectDate +"']").click();
    await page.locator(`//a[@class='ui-state-default' and text()='${selectDate}']`).click();












});



