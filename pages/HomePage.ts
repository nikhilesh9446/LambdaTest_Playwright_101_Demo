import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;

  private simpleFormLink: Locator;
  private sliderLink: Locator;
  private inputFormLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.simpleFormLink = page.getByRole('link', { name: 'Simple Form Demo' });
    this.sliderLink = page.getByRole('link', { name: 'Drag & Drop Sliders' });
    this.inputFormLink = page.getByRole('link', { name: 'Input Form Submit' });
  }

  async openApplication() {
    await this.page.goto('/');
  }

  async navigateToSimpleForm() {
    await this.simpleFormLink.click();
  }

  async navigateToSlider() {
    await this.sliderLink.click();
  }

  async navigateToInputForm() {
    await this.inputFormLink.click();
  }
}