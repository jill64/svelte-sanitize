import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-sanitize' })
  ).toBeVisible()

  await expect(page.getByText('This is Render by Browser')).toBeVisible()
})
