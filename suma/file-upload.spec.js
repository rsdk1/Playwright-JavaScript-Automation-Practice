import { test, expect } from '@playwright/test';

test.only('single file', async ({ page }) => {
  await page.goto('https://www.file.io/');

  await page.locator("//input[@id='select-files-input']").setInputFiles(['suma/data/Sample_General_Ledger.xlsx','suma/data/file2.xlsx']);
  await page.waitForTimeout(5000);

});

test('multiple file', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=EE80E76FCBB3523162FF81DAB238BA45');

});