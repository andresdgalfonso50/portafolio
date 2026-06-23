"""Final test of live site."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("https://andresdgalfonso50.github.io/portafolio/", wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(3000)
    page.evaluate("document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'))")
    page.wait_for_timeout(1000)
    page.screenshot(path="C:\\Users\\yalfonso\\Documents\\OPENCODE\\PORT\\snapshots\\FINAL-home.png", full_page=False)
    print("Title:", page.title())
    print("URL:", page.url)

    hj_loaded = page.evaluate("typeof window.hj !== 'undefined'")
    print("Hotjar loaded:", hj_loaded)
    if hj_loaded:
        settings = page.evaluate("JSON.stringify(window._hjSettings)")
        print("Hotjar settings:", settings)

    # Test navigation
    page.goto("https://andresdgalfonso50.github.io/portafolio/#/contacto", wait_until="networkidle", timeout=30000)
    page.wait_for_timeout(2000)
    page.evaluate("document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'))")
    page.screenshot(path="C:\\Users\\yalfonso\\Documents\\OPENCODE\\PORT\\snapshots\\FINAL-contacto.png", full_page=False)
    print("Contact title:", page.title())

    browser.close()
    print("OK - site is LIVE and working")
