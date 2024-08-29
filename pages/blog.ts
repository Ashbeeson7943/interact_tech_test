import { expect, Locator, Page } from "@playwright/test";
import { DataJson } from "../tests/blog.spec";

export class Blog {
    readonly page: Page;
    readonly all_posts_button: Locator;
    readonly title_label: Locator;
    readonly summary_label: Locator;
    readonly content_label: Locator;

    constructor(page: Page) {
        this.page = page;
        this.all_posts_button = page.getByText('All Posts');
        this.content_label = page.locator('#blogs > article > div.container.content-container > section > div > div.col-xs-12.col-md-8 > section > p:nth-child(1)');
        this.title_label = page.locator('#blogs > article > div.has-overlay.is-inverted > header > div > div > div > h1');
        this.summary_label = page.locator('#blogs > article > div.has-overlay.is-inverted > header > div > div > div > p > strong');
    }

    async view_all_posts() {
        await this.all_posts_button.click();
    }

    async get_blog_info(test_data: DataJson) {
        expect(await this.title_label.innerText()).toEqual(test_data.blog.title);
        expect(await this.summary_label.innerText()).toEqual(test_data.blog.summary);
        expect(await this.content_label.innerText()).toEqual(test_data.blog.content);
    }
}