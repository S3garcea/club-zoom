import { test, expect, Page, Locator } from '@playwright/test';
import { addAbortListener } from 'events';

export default class SearchPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators

    title = () => this.page.locator('.entry-title');
    sorry = () => this.page.locator('.alert');

    public async goto()
    {
        await this.page.goto('https://www.club-zoom.ro/?s=asd');
    }
}