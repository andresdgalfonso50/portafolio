from playwright.sync_api import sync_playwright
from pathlib import Path

CV_HTML = Path(r"C:\Users\yalfonso\Documents\OPENCODE\PORT\public\assets\cv-yeison-alfonso.html")
CV_PDF = Path(r"C:\Users\yalfonso\Documents\OPENCODE\PORT\public\assets\cv-yeison-alfonso.pdf")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto(CV_HTML.resolve().as_uri(), wait_until="networkidle")
    page.wait_for_timeout(1500)
    page.pdf(
        path=str(CV_PDF),
        format="A4",
        print_background=True,
        margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        prefer_css_page_size=True,
    )
    browser.close()

print(f"PDF generated: {CV_PDF} ({CV_PDF.stat().st_size} bytes)")
