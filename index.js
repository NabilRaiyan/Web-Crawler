const puppeteer = require("puppeteer");

async function start() {
    const browser = await puppeteer.launch({ headless: false }); // Run in visible mode
    const page = await browser.newPage();

    // Navigate to the Chaldal page
    await page.goto("https://chaldal.com/premium-perishables", { waitUntil: 'networkidle0' });

    // Ensure the page is fully loaded and the necessary elements are present
    await page.waitForSelector(".product"); // Adjust selector as needed

    // Inject CSS to change the background color of elements
    await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = `
            .product .imageWrapper .name {
                background-color: red !important;
            }
        `;
        document.head.appendChild(style);
    });

    // Optional: Take a screenshot to verify changes
    // await page.screenshot({ path: "screenshot.png", fullPage: true });

    // await browser.close();
}

start();
