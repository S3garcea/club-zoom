import { test, expect, Page, Locator } from '@playwright/test';
import { addAbortListener } from 'events';

export default class contactPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators

    // TOPBAR
    concursuri = () => this.page.locator('.menu-concursuri.menu-item-158');
    facebook = () => this.page.locator('.topbar_social >> ul >> li >> a');
    search = () => this.page.locator('.search-query');

    // HEADER
    logo = () => this.page.locator('.kad-standard-logo');
    tagline = () => this.page.locator('.kad_tagline.belowlogo-text');
    home = () => this.page.locator('.menu-home.current-menu-item.current_page_item.menu-item-10 >> a').nth(0);
    jocuri = () => this.page.locator('.menu-jocuri.menu-item-26 >> a').nth(0);
    portofoliu = () => this.page.locator('.menu-portofoliu-club-zoom.menu-item-141 >> a').nth(0);
    contact = () => this.page.locator('.menu-contact.menu-item-22 >> a').nth(0);

    // CAROUSEL

    // HOMEHEADER
    entrytitle = () => this.page.locator('.entry-title');
    subtitle = () => this.page.locator('.subtitle');

    // FOOTER
    adresa = () => this.page.getByRole('heading', { name: 'adresa' });
    clubzoom = () => this.page.locator('.vcard-company');
    adr = () => this.page.locator('.vcard-address');
    zoomsilver = () => this.page.locator('.tel').nth(0);
    zoomculori = () => this.page.locator('.tel.fixedtel');
    email = () => this.page.locator('.email');

    categorii = () => this.page.getByRole('heading', { name: 'Categorii' });

    parteneri = () => this.page.getByRole('heading', { name: 'parteneri' });

    public async goto()
    {
        await this.page.goto('https://www.club-zoom.ro/');
    }
}