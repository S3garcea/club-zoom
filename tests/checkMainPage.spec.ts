import { test, expect } from '@playwright/test'
import MainPage from './support/main.page.ts'
import { assert } from 'console'
import { SourceTextModule } from 'vm'
import SearchPage from './support/search.page.ts'

test('Check concursuri', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    await mainPage.concursuri().isVisible()
    await expect(mainPage.concursuri()).toHaveText('concursuri')

})

test('Check facebook social', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    await mainPage.facebook().isVisible()
    expect(await mainPage.facebook().getAttribute('href')).toContain('https://www.facebook.com/pages/Club-Zoom/285894671511848')
    console.log(await mainPage.facebook().getAttribute('href'))
 
})

test('Check search', async ({ page }) => {
    const mainPage = new MainPage(page)
    const searchPage = new SearchPage(page)
    const text = 'asd'

    await mainPage.goto()

    await mainPage.search().type(text)
    await mainPage.search().press('Enter')

    console.log(page.url())
    expect(page.url()).toBe('https://www.club-zoom.ro/?s=' + text)
    await expect(searchPage.title()).toBeVisible()
    await expect(searchPage.title()).toHaveText('Search Results for ' + text)
    await expect(searchPage.sorry()).toBeVisible()
    await expect(searchPage.sorry()).toHaveText('Sorry, no results were found.')
})

test('Check logo', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    await mainPage.logo().isVisible()
    expect(await mainPage.logo().getAttribute('src')).toContain('http://www.club-zoom.ro/wp-content/uploads/2015/03/logo.png')
    console.log(await mainPage.logo().getAttribute('src'))
    expect(await mainPage.logo().getAttribute('alt')).toContain('club-zoom.ro')
    console.log(await mainPage.logo().getAttribute('alt'))
})

test('Check tag line', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    await mainPage.tagline().isVisible()
    await expect(mainPage.tagline()).toHaveText('bar, biliard, bowling, snooker, tenis de masa, darts')
})

test('Check menu Home', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    // Home
    await mainPage.home().isVisible()
    await expect(mainPage.home()).toHaveText('Home')
    expect(await mainPage.home().getAttribute('href')).toContain('https://www.club-zoom.ro/')
    await mainPage.home().click()
    console.log(page.url())
    expect(page.url()).toBe('https://www.club-zoom.ro/')

})

test('Check menu Jocuri', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    // Jocuri
    await mainPage.jocuri().isVisible()
    await expect(mainPage.jocuri()).toHaveText('Jocuri')
    expect(await mainPage.jocuri().getAttribute('href')).toContain('https://www.club-zoom.ro/jocuri-activitati-din-club/')
    await mainPage.jocuri().click()
    console.log(page.url())
    expect(page.url()).toBe('https://www.club-zoom.ro/jocuri-activitati-din-club/')
})

test('Check menu Portofoliu', async ({ page }) => {
    const mainPage = new MainPage(page)
    
    await mainPage.goto()
    
    // Portofoliu
    await mainPage.portofoliu().isVisible()
    await expect(mainPage.portofoliu()).toHaveText('portofoliu club-zoom')
    expect(await mainPage.portofoliu().getAttribute('href')).toContain('https://www.club-zoom.ro/portofoliu-club-zoom/')
    await mainPage.portofoliu().click()
    console.log(page.url())
    expect(page.url()).toBe('https://www.club-zoom.ro/portofoliu-club-zoom/')
})

test('Check menu Contact', async ({ page }) => {
    const mainPage = new MainPage(page)
    
    await mainPage.goto()    

    // Contact 
    await mainPage.contact().isVisible()
    await expect(mainPage.contact()).toHaveText('contact')
    expect(await mainPage.contact().getAttribute('href')).toContain('https://www.club-zoom.ro/contact/')
    await mainPage.contact().click()
    console.log(page.url())
    expect(page.url()).toBe('https://www.club-zoom.ro/contact/')
})

test('Check footer', async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goto()

    // Adresa

    await mainPage.adresa().isVisible()
    await expect(mainPage.adresa()).toHaveText('adresa')
    await mainPage.clubzoom().isVisible()
    await expect(mainPage.clubzoom()).toHaveText('club zoom')
    await mainPage.adr().isVisible()
    await expect(mainPage.adr()).toHaveText('Libertatii nr. 7 bl O1 Targoviste Dambovita')
    await mainPage.zoomsilver().isVisible()
    await expect(mainPage.zoomsilver()).toHaveText('zoom silver - 0245 222411')
    await mainPage.zoomculori().isVisible()
    await expect(mainPage.zoomculori()).toHaveText('zoom culori - 0245 640279')
    await mainPage.email().isVisible()
    await expect(mainPage.email()).toHaveText('contact@club-zoom.ro')
    expect(mainPage.email().getAttribute('href')).toContain('mailto:contact@club-zoom.ro')

    // Categorii

    await mainPage.categorii().isVisible()
    await expect(mainPage.categorii()).toHaveText('Categorii')

    // Parteneri

    await mainPage.parteneri().isVisible()
    await expect(mainPage.parteneri()).toHaveText('parteneri')
    expect(mainPage.parteneri().getAttribute('href')).toContain('https://mondial-targoviste.ro/')
})
