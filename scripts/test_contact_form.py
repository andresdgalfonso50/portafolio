"""
Test contact form to verify FormSubmit.co integration.
"""
from playwright.sync_api import sync_playwright
import socket
import subprocess
import time
from pathlib import Path

PORT = 4173
ROOT = Path(r"C:\Users\yalfonso\Documents\OPENCODE\PORT")
SHOTS = ROOT / "snapshots" / "form-test"
SHOTS.mkdir(parents=True, exist_ok=True)

def wait_port(port, timeout=15):
    end = time.time() + timeout
    while time.time() < end:
        try:
            with socket.create_connection(("localhost", port), 1):
                return True
        except OSError:
            time.sleep(0.4)
    return False

print("Starting vite preview...")
proc = subprocess.Popen(
    ["C:\\Program Files\\nodejs\\npm.cmd", "run", "preview", "--", "--port", str(PORT), "--host", "127.0.0.1"],
    cwd=str(ROOT),
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
    shell=True,
)
try:
    if not wait_port(PORT, 20):
        raise RuntimeError("preview did not start")

    base = f"http://127.0.0.1:{PORT}"
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()

        # Listen to form submit
        form_action_seen = []
        def on_request(request):
            if "formsubmit.co" in request.url:
                form_action_seen.append(request.url)
                print(f"FORM SUBMIT DETECTED: {request.url}")

        page.on("request", on_request)

        print("Visiting /#/contacto...")
        page.goto(f"{base}/#/contacto", wait_until="networkidle")
        page.wait_for_timeout(1500)
        page.screenshot(path=str(SHOTS / "contacto-empty.png"), full_page=False)

        # Fill form
        page.fill('#name', 'Test User')
        page.fill('#email', 'test@example.com')
        page.select_option('#project', '0a1')
        page.fill('#message', 'This is a test message with more than 10 characters to pass validation')
        page.wait_for_timeout(500)
        page.screenshot(path=str(SHOTS / "contacto-filled.png"), full_page=False)

        # Try to submit but intercept the navigation
        # FormSubmit.co will redirect to a thank-you page, which we don't want to follow
        # Instead, just verify the form is configured correctly
        action = page.locator('form.contact-form').get_attribute('action')
        method = page.locator('form.contact-form').get_attribute('method')
        print(f"Form action: {action}")
        print(f"Form method: {method}")

        browser.close()

    if "formsubmit.co" in (action or ""):
        print(f"\n[OK] Form correctly configured to POST to FormSubmit.co")
    else:
        print(f"\n[FAIL] Form action is not FormSubmit.co: {action}")

finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()
