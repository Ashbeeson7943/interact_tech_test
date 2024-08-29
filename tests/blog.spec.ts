import { test, expect } from '@playwright/test';
import test_data from '../data.json';
import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { User_settings } from '../pages/user_settings';
import { Create_blog } from '../pages/create_blog';
import { Blog } from '../pages/blog';
import { Blog_list } from '../pages/blog_list';

export type DataJson = typeof test_data;


// test.afterEach(async ({ page }) => {
//     const blog_page = new Blog(page);
//     await blog_page.view_all_posts();
//     await page.waitForLoadState("domcontentloaded", { timeout: 10000 });
//     const blog_list = new Blog_list(page);
//     await blog_list.delete_blog_post(test_data.blog.title);
// })

test('Create blog post', async ({ page }) => {
    test.setTimeout(60000);
    // Navigate to the specified URL.

    await page.goto('/');

    // Log in using the provided credentials.

    const login_page = new Login(page);
    await login_page.login(test_data);
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

    // Navigate to the profile menu and select "Add Blog Post."

    const home_page = new Home(page);
    expect(await page.title()).toEqual('Home Page - Interact');
    await home_page.open_settings();

    const user_settings = new User_settings(page);
    await user_settings.click_add_blog_post();
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

    // Fill in the blog post form with the required text and image.

    const new_blog_page = new Create_blog(page);
    expect(await page.title()).toEqual('Interact Blog - Interact');
    await new_blog_page.input_blog_post_details(test_data);

    // Click “Continue” to submit the blog post.
    // Set “Publish” and “Make Feature Post” to Yes

    await new_blog_page.save_post();
    await new_blog_page.handle_error(test_data);
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

    // Navigate to “All Posts” and validate that the blog post exists.

    let blog_page = new Blog(page);
    expect(await page.title()).toEqual('Interact Blog - Interact');
    await blog_page.view_all_posts();
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

    // Verify the content of the blog post matches the input data.
    const blog_list = new Blog_list(page);
    expect(await page.title()).toEqual('People Directory - Interact');
    await blog_list.select_blog_post(test_data.blog.title);
    await page.waitForLoadState("domcontentloaded", { timeout: 10000 });

    blog_page = new Blog(page);
    expect(await page.title()).toEqual('Interact Blog - Interact');
    await blog_page.get_blog_info(test_data);

})