export class SearchPage {
  constructor(page) {
    this.page = page;
    this.productLink = page.locator("//div[@class='KzDlHZ']");
  }

  async selectFirstProduct() {
    await this.productLink.nth(0).click();
  }
}
