import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SliderPage } from '../pages/SliderPage';

test('Slider Demo Validation', async ({ page }) => {
  const home = new HomePage(page);
  const slider = new SliderPage(page);

  await home.openApplication();
  await home.navigateToSlider();
  await slider.validateDefaultValue();
  await slider.setSliderValue('95');
});