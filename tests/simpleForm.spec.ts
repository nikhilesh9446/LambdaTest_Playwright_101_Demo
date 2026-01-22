import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SimpleFormPage } from '../pages/SimpleFormPage';
import { testData } from '../test-data/testData';

test('Simple Form Demo Validation', async ({ page }) => {
  const home = new HomePage(page);
  const form = new SimpleFormPage(page);

  await home.openApplication();
  await home.navigateToSimpleForm();
  await form.validateUrl();
  await form.enterMessage(testData.message);
  await form.clickSubmit();
  await form.validateResult(testData.message);
});