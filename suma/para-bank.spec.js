import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=EE80E76FCBB3523162FF81DAB238BA45');
  await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Forgot login info?' })).toBeVisible();
  await page.locator('span').click({
    button: 'right'
  });
  await page.locator('span').click();
  await page.locator('span').click();
  await page.locator('span').click();
  await expect(page.getByRole('link', { name: 'Account History' })).toBeVisible();
  await page.getByRole('heading', { name: 'Latest News' }).click();
});