
import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  const product = page.locator('#center_column').getByText('Faded Short Sleeve T-shirts');
  await expect(product).toBeVisible();
});
