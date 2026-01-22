import { Page, Locator, expect } from '@playwright/test';

export class SliderPage {
  private page: Page;

  private defaultValueLabel: Locator;
  private slider: Locator;
  private sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultValueLabel = page.getByRole('heading', { name: 'Default value 15' });
    this.slider = page.locator('#slider3 input');
    this.sliderValue = page.locator('#rangeSuccess');
  }

  async validateDefaultValue() {
    await expect(this.defaultValueLabel).toBeVisible();
  }

  async setSliderValue(value: string) {
    await this.slider.fill(value);
    await expect(this.sliderValue).toHaveText(value);
  }
}