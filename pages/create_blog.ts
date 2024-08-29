import { Locator, Page } from "@playwright/test";
import path from "path";
import { DataJson } from "../tests/blog.spec";


export class Create_blog {
    readonly page: Page;
    readonly image_upload_input: Locator;
    readonly post_title_input: Locator;
    readonly post_summary_input: Locator;
    readonly post_content_input: Locator;
    readonly continue_button: Locator;
    readonly publish_switch: Locator;
    readonly save_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.image_upload_input = page.locator('#blog-post-uploader-button');
        this.post_summary_input = page.getByPlaceholder('Click to add Post Summary');
        this.post_title_input = page.getByPlaceholder('Click to add Post Title');
        this.post_content_input = page.locator('#blogPostBodyContent');
        this.continue_button = page.locator('a', { hasText: "Continue" });
        this.publish_switch = page.locator('label.switch');
        this.save_button = page.locator('div.ui-panel-container a');
    }


    async input_blog_post_details(test_data: DataJson) {
        await this.post_title_input.fill(test_data.blog.title);
        await this.post_title_input.press('Enter');
        await this.post_summary_input.fill(test_data.blog.summary);
        await this.post_summary_input.press('Enter');
        await this.post_content_input.fill(test_data.blog.content);
        await this.post_content_input.press('Enter');
        await this.upload_image(test_data.blog.img_path);

    }

    async save_post(publish: boolean = true) {
        await this.continue_button.click()
        if (publish) {
            await this.publish_switch.last().click()
        }
        await this.save_button.last().click()

    }

    async handle_error(test_data: DataJson) {
        if (await this.page.getByText('Please add some content to your blog post').isVisible()) {
            await this.post_content_input.fill(test_data.blog.content);
            await this.post_content_input.press('Enter');
        }
    }

    private async upload_image(file_path: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.image_upload_input.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(__dirname, file_path));
    }

}