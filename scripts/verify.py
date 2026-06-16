"""
Quick visual verification after cleanup.
"""
import subprocess
import time
import socket
from pathlib import Path
from playwright.sync_api import sync_playwright

PORT = 4173
ROOT = Path(r"C:\Users\yalfonso\Documents\OPENCODE\PORT")
SHOTS = ROOT / "snapshots-clean"
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

        for path, name in [
            ("/", "home"),
            ("/#/sobre-mi", "about"),
            ("/#/contacto", "contacto"),
            ("/#/ecommerce", "ecommerce"),
            ("/#/app", "app"),
            ("/#/app-web", "xentral"),
        ]:
            print(f"Visiting {path}...")
            page.goto(f"{base}{path}", wait_until="networkidle")
            page.evaluate("document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'))")
            page.wait_for_timeout(1500)
            page.screenshot(path=str(SHOTS / f"{name}.png"), full_page=False)

        browser.close()
    print(f"\nDone — {SHOTS}")
finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()
