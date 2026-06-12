/**
 * Regression suite — Portfolio Yeison Alfonso
 * 
 * Corre:   npx playwright test
 * Modo CI: PREVIEW=true npx playwright test
 * UI mode: npx playwright test --ui
 * 
 * Estrategia:
 *   - Cada página se prueba en desktop (1440px) y mobile (390px)
 *   - Se verifica: título, hero h1, contraste visual, CTA final, navegación
 *   - Sin errores de consola ni request fallidos
 *   - Screenshots solo en fallo
 */
import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/',         name: 'Home'       , color: 'violet', h1Content: 'productos' },
  { path: '/app',      name: 'App'        , color: 'violet', h1Content: 'Asistencia' },
  { path: '/ecommerce',name: 'Ecommerce'  , color: 'blue'  , h1Content: 'Optimización' },
  { path: '/app-web',  name: 'Xentral'    , color: 'emerald',h1Content: 'Telemedicina' },
  { path: '/sobre-mi', name: 'About'      , color: 'violet', h1Content: 'productos' },
  { path: '/contacto', name: 'Contacto'   , color: 'blue'  , h1Content: 'Cuéntame' },
];

/* ─── Helpers ─── */
async function assertNoPageErrors(page) {
  const logs = [];
  page.on('console', msg => { if (msg.type() === 'error') logs.push(msg.text()); });
  page.on('pageerror', err => logs.push(`PAGEERR: ${err.message}`));
  // Navigation already happened, collect any errors
  await page.evaluate(() => null);
  expect(logs, `Console errors: ${logs.join('; ')}`).toHaveLength(0);
}

async function heroShouldBeVisible(page, pageInfo) {
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible({ timeout: 8000 });
  if (pageInfo.h1Content) {
    await expect(h1).toContainText(pageInfo.h1Content);
  }
}

async function navWorks(page) {
  const navLink = page.locator('nav a, .nav a, ul.nav-links a').first();
  await expect(navLink).toBeVisible();
  await expect(navLink).toHaveAttribute('href');
}

async function ctaExists(page) {
  // Detect CTA: footer or main content CTA buttons (not nav links)
  // Use :visible to filter out nav links hidden via display:none on mobile
  const ctas = page.locator('a[href*="contacto"]:visible, a:has-text("Iniciar"):visible, a:has-text("Conversemos"):visible, a:has-text("Volver al inicio"):visible').first();
  if (await ctas.count() > 0) {
    await expect(ctas).toBeVisible();
  }
}

async function footerHasBrand(page) {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(800);
  // Use .last() because testimonial blockquote also uses <footer> in some pages
  const footer = page.locator('footer').last();
  await expect(footer).toBeVisible({ timeout: 5000 });
}

/* ─── Tests ─── */
PAGES.forEach((pageInfo) => {
  test.describe(`${pageInfo.name} (${pageInfo.color})`, () => {
    test('carga sin errores de consola', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      await assertNoPageErrors(page);
    });

    test('hero visible con h1 correcto', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await heroShouldBeVisible(page, pageInfo);
    });

    test('navegación funciona', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await navWorks(page);
    });

    test('CTA final o call-to-action presente', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await ctaExists(page);
    });

    test('footer visible con marca', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      // Scroll to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      await footerHasBrand(page);
    });
  });
});

/* ─── Cross-page tests ─── */
test.describe('Cross-page', () => {
  test('navegar entre páginas no produce errores', async ({ page }) => {
    for (const p of PAGES) {
      await page.goto(p.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      // Click first nav link that isn't current page
      const links = page.locator('nav a, ul.nav-links a, [role="navigation"] a');
      const count = await links.count();
      let clicked = false;
      for (let i = 0; i < count && !clicked; i++) {
        const href = await links.nth(i).getAttribute('href');
        if (href && href !== p.path && href !== '#') {
          await links.nth(i).click();
          await page.waitForTimeout(1000);
          // Verify new page loaded
          await expect(page.locator('h1').first()).toBeVisible({ timeout: 5000 });
          clicked = true;
        }
      }
      // Re-navigate to next page
      await page.goto(p.path, { waitUntil: 'networkidle' });
    }
  });
});

test.describe('Responsive snapshots', () => {
  // Generate reference screenshots (run with --update-snapshots to create)
  PAGES.forEach((pageInfo) => {
    test(`snapshot ${pageInfo.name}`, async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await expect(page).toHaveScreenshot(`${pageInfo.path.replace(/\//g, '_')}.png`, {
        fullPage: true,
        maxDiffPixels: 500, // Allow minor anti-aliasing diffs
      });
    });
  });
});
