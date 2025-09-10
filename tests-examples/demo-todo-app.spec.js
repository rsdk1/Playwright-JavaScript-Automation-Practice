import { test, expect } from '@playwright/test';

test.describe('Multiple tests inside one describe', () => {
  
  test('always passing test 1 @sanity', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/); // should pass
  });

  test('always passing test 2 @sanity', async ({ page }) => {
    const sum = 2 + 3;
    expect(sum).toBe(5); // should pass
  });

  test('always failing test 1 @sanity', async ({ page }) => {
    const value = 10;
    expect(value).toBe(10); 
  });

  test('always failing test 2 @sanity', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/NonExistingTitle/); // ❌ will fail
  });

  test.skip('always skipped test @sanity', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

});