import { Page, Locator, expect } from '@playwright/test';
import { testData } from '../test-data/testData';

export class InputFormPage {
  private page: Page;

  private submitBtn: Locator;
  private nameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private companyInput: Locator;
  private websiteInput: Locator;
  private countrySelect: Locator;
  private cityInput: Locator;
  private address1Input: Locator;
  private address2Input: Locator;
  private stateInput: Locator;
  private zipInput: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.companyInput = page.getByRole('textbox', { name: 'Company' });
    this.websiteInput = page.getByRole('textbox', { name: 'Website' });
    this.countrySelect = page.getByRole('combobox');
    this.cityInput = page.getByRole('textbox', { name: 'City', exact: true });
    this.address1Input = page.getByRole('textbox', { name: 'Address 1' });
    this.address2Input = page.getByRole('textbox', { name: 'Address 2' });
    this.stateInput = page.getByRole('textbox', { name: 'City* State*' });
    this.zipInput = page.getByRole('textbox', { name: 'Zip Code*' });
    this.successMessage = page.getByText('Thanks for contacting us, we will get back to you shortly.');
  }

  async submitEmptyForm() {
    await this.submitBtn.click();
    await expect(this.page.getByText('Please fill in the fields')).toBeVisible();
  }

  async fillForm() {
    const d = testData.form;
    await this.nameInput.fill(d.name);
    await this.emailInput.fill(d.email);
    await this.passwordInput.fill(d.password);
    await this.companyInput.fill(d.company);
    await this.websiteInput.fill(d.website);
    await this.countrySelect.selectOption(d.country);
    await this.cityInput.fill(d.city);
    await this.address1Input.fill(d.address1);
    await this.address2Input.fill(d.address2);
    await this.stateInput.fill(d.state);
    await this.zipInput.fill(d.zip);
  }

  async submitAndValidate() {
    await this.submitBtn.click();
    await expect(this.successMessage).toBeVisible();
    console.log('Success Message:', await this.successMessage.textContent());
  }
}