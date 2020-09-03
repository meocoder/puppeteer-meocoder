const express = require('express');
const puppeteer = require('puppeteer')

const app = express();

const port = process.env.port || 5000;

app.get('/', (req,res)=>{
    res.send();
})

app.listen(port, ()=> {
    console.log("port running ");
});

(async function () {
    const browser = await puppeteer.launch({
        headless: true,
        args: [ // Disable Chromium's unnecessary SUID sandbox.
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ]
    });
    const page = await browser.newPage(); // Create a new page instance
    await page.goto("https://pptr.dev"); // Navigate to the pptr.dev website

    await page.waitFor(5000); // Wait for 5 seconds to see the beautiful site
    await browser.close(); // Close the browser
})();