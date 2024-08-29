import { expect, Locator, Page } from "@playwright/test";
import { DataJson } from "../tests/blog.spec";


export class Login {
    readonly page: Page;
    readonly username_input: Locator;
    readonly password_input: Locator;
    readonly login_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_input = page.locator('#Username');
        this.password_input = page.locator('#Password');
        this.login_button = page.locator('#loginbtn');
    }

    async login(test_data: DataJson) {
        await expect(this.username_input).toBeVisible();
        await this.username_input.fill(test_data.username);
        await this.password_input.fill(test_data.password);
        await this.login_button.click();
    }
}