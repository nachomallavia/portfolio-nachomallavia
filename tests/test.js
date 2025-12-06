import { expect, test } from '@playwright/test';

test('homepage loads with portfolio content', async ({ page }) => {
	await page.goto('/');
	// Check that the page has loaded with the portfolio owner's name (in Spanish or English)
	// Spanish: "es Nacho" or English: "is Nacho"
	await expect(page.locator('h1').first()).toBeVisible();
	await expect(page.locator('h1').first()).toContainText(/Nacho/i);
});
