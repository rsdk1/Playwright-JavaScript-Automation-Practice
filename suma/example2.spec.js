import {test, expect} from '@playwright/test';
import { log } from 'console';

test('TC1-Title Check', async ({page})=>{
try{
 await page.goto("https://demoblaze.com/");

 const title = await page.title();
 console.log(title);
 

}
catch(error){
   
   console.log("inside catch back");
}
finally{
    console.log("inside finnaly back");
}
 console.log("welcome back");
})


// import{test,expect} from '@playwright/test';
// test('TCO2-login page chcek',async({page})=>
//     {
//     await page.goto("");
//     var login = await page.goto();
//     console.log(login);
//     await expect (page).toHaveTitle("");

// })

// import{test,except}from '@playwright/test';
// test("TCO3-password check",async({page})=>{
//     await page.goto("");
//     var pass=await page.goto();
//     console.log(pass);
//     await expect(page).toHaveTitle("")
//})