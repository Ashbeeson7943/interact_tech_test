import { Locator, Page } from "@playwright/test";

export class Home {
    readonly page: Page;
    readonly user_settings_button: Locator;


    constructor(page: Page) {
        this.page = page;
        this.user_settings_button = page.locator('#profile-alerts')
    }

    async open_settings() {
        await this.user_settings_button.click()
    }

}