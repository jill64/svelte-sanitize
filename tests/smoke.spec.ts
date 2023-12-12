import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: '@jill64/svelte-sanitize' })
  ).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'This is Rendered by Browser' })
  ).toBeVisible()
})
