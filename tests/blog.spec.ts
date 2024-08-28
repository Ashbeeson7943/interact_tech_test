import { test, expect } from '@playwright/test';
import dataJson from '../data.json';
import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { User_settings } from '../pages/user_settings';

export type DataJson = typeof dataJson;


test('Create blog post', async ({ page }) => {
    // Navigate to the specified URL.

    await page.goto('/');

    // Log in using the provided credentials.

    const login_page = new Login(page);
    await login_page.login(dataJson);
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 })
    expect((await page.title()).toString()).toEqual('Home Page - Interact');

    // Navigate to the profile menu and select "Add Blog Post."

    const home_page = new Home(page)
    await home_page.open_settings()

    const user_settings = new User_settings(page)
    await user_settings.click_add_blog_post()
    expect((await page.title()).toString()).toEqual('Interact Blog - Interact');

    // Fill in the blog post form with the required text and image.

    

    // Click “Continue” to submit the blog post.

    // Set “Publish” and “Make Feature Post” to Yes

    // Navigate to “All Posts” and validate that the blog post exists.

    // Verify the content of the blog post matches the input data.

})