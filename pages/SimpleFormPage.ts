import { Page, Locator, expect } from '@playwright/test';

export class SimpleFormPage {
  private page: Page;

  private messageInput: Locator;
  private submitButton: Locator;
  private resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messageInput = page.getByRole('textbox', { name: 'Please enter your Message' });
    this.submitButton = page.getByRole('button', { name: 'Get Checked Value' });
    this.resultText = page.locator('#message');
  }

  async validateUrl() {
    await expect(this.page).toHaveURL(/simple-form-demo/);
  }

  async enterMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async validateResult(message: string) {
    await expect(this.resultText).toHaveText(message);
    console.log('Displayed Message:', await this.resultText.textContent());
  }
}