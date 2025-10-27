
from playwright.sync_api import sync_playwright

def verify_styles():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:8080/')

        # Wait for the language selection page to load and click the English button
        page.wait_for_selector('text=English')
        page.click('text=English')

        # Now on the main page, wait for it to load
        page.wait_for_load_state('networkidle')

        # Take a screenshot before trying to interact with the theme switcher
        page.screenshot(path='jules-scratch/verification/pre-click-debug.png')

        # Find and click the theme switcher button
        button = page.locator('button[aria-label="Toggle Theme"]')
        button.wait_for(state='visible')
        button.click()

        # Add a small delay for the theme change to apply
        page.wait_for_timeout(500)

        # Take a screenshot of the dark mode
        page.screenshot(path='jules-scratch/verification/dark-mode.png')
        browser.close()

if __name__ == '__main__':
    verify_styles()
