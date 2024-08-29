import { Locator, Page } from "@playwright/test";

export class Blog_list {
    readonly page: Page;
    readonly blog_list: Locator;
    readonly blog_options: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blog_list = page.locator('#person-blog-results');
        this.blog_list = page.locator('#person-blog-results div.dropdown');

    }

    async select_blog_post(blog_title: string) {
        await this.blog_list.getByText(blog_title).first().click()
    }

    async delete_blog_post(blog_title: string) {
        await this.blog_options.click();
        this.page.on('dialog', dialog => dialog.accept());
        await this.blog_list.getByText('Delete Post').click();
    }
}