"""
Download Simple Icons SVGs to public/assets/logos/stack/
"""
import urllib.request
from pathlib import Path

DEST = Path(r"C:\Users\yalfonso\Documents\OPENCODE\PORT\public\assets\logos\stack")
DEST.mkdir(parents=True, exist_ok=True)

# (slug, local-name, hex color)
STACK = [
    ("figma", "figma", "#F24E1E"),
    ("notion", "notion", "#000000"),
    ("vue-dot-js", "vue", "#4FC08D"),
    ("tailwind-css", "tailwind", "#06B6D4"),
    ("googleanalytics", "google-analytics", "#E37400"),
    ("hotjar", "hotjar", "#FD3A5C"),
    ("microsoftclarity", "clarity", "#B620E0"),
    ("googlefonts", "google-fonts", "#4285F4"),
    ("github", "github", "#181717"),
    ("vercel", "vercel", "#000000"),
    ("netlify", "netlify", "#00C7B7"),
    ("vuedotjs", "vue", "#4FC08D"),
]

BASE = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/{slug}.svg"

for slug, name, _ in STACK:
    target = DEST / f"{name}.svg"
    if target.exists() and target.stat().st_size > 100:
        print(f"skip {name}")
        continue
    url = BASE.format(slug=slug)
    try:
        with urllib.request.urlopen(url, timeout=15) as r:
            data = r.read()
        target.write_bytes(data)
        print(f"ok {name} ({len(data)} bytes)")
    except Exception as e:
        print(f"FAIL {name}: {e}")

print("\nDONE")
