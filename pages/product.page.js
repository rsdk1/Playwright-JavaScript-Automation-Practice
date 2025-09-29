export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator("//span[normalize-space()='Cart']"); // example
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
