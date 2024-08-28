import { Locator, Page } from "@playwright/test";


export class User_settings {
    readonly page: Page;
    readonly add_blog_post_link: Locator;

    constructor(page: Page) {
        this.page = page;
        this.add_blog_post_link = page.locator('a', { hasText: "Add Blog Post" })
    }

    async click_add_blog_post() {
        await this.add_blog_post_link.click()
    }
}