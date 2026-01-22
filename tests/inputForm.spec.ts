import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { InputFormPage } from '../pages/InputFormPage';

test('Input Form Submit Validation', async ({ page }) => {
  const home = new HomePage(page);
  const form = new InputFormPage(page);

  await home.openApplication();
  await home.navigateToInputForm();
  await form.submitEmptyForm();
  await form.fillForm();
  await form.submitAndValidate();
});