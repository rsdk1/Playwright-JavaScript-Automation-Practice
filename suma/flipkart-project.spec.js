import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';
import { SearchPage } from '../pages/search.page.js';
import { ProductPage } from '../pages/product.page.js';
import testData from './utils/testData.js';


test.describe('Flipkart Automation', () => {
  test('Search and Add Product to Cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);


    await homePage.gotoHome();

    // Data-driven search
    for (let product of testData.products) {
    await homePage.gotoHome();
      await homePage.searchProduct(product);

      await searchPage.selectFirstProduct();

     
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
      ]);
      await newPage.waitForLoadState();

      
      await productPage.addToCart();

      await newPage.close();
      console.log("Flipkart search completed for"+product);
    }
  });
});
