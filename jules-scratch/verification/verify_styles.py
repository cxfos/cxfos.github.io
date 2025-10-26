from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")
    page.click("text=English")
    page.wait_for_selector("#home")
    page.screenshot(path="jules-scratch/verification/header_styled.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
