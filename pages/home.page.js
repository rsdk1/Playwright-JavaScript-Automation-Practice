export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('//input[@placeholder="Search for Products, Brands and More"]');
    this.searchButton = page.locator('//button[@type="submit"]');
  }

  async gotoHome() {
    await this.page.goto('https://www.flipkart.com/');
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}
