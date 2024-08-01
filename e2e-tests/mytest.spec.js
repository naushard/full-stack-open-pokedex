//const { test, describe, expect, beforeEach } = require('@playwright/test')
const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  }),

  test('Can be navigated to Charmander page', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('charmander')).toBeVisible()

    await page.getByRole('link', { name: 'charmander' }).click()
    
    await expect(page.getByText('charmander')).toBeVisible()
    await expect(page.getByText('next')).toBeVisible()
    await expect(page.getByText('previous')).toBeVisible()
    await expect(page.getByText('home')).toBeVisible()
    


  })


})