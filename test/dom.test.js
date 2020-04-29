import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"
const puppeteer = require("puppeteer")

test('Pottery is rendered to DOM', async () => {
    const mug = toSellOrNotToSell(firePottery(makePottery("Mug", 10, 8), 3000))
    const ornament = toSellOrNotToSell(firePottery(makePottery("Ornament", 2, 5), 2000))
    const platter = toSellOrNotToSell(firePottery(makePottery("Platter", 7, 2), 2000))

    let browser = await puppeteer.launch({
        headless: true
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.potteryList')

    let section = await page.$eval('.potteryList', _ => _.innerHTML)

    section = section.replace(/\n/g, "")
    section = section.replace(/\s{2,}/g, "")

    try {
        expect(section).toBe(`<section class="pottery" id="pottery--2"><h2 class="pottery__shape">Ornament</h2><div class="pottery__properties">Item weighs 2 grams and is 5 cm in height</div><div class="pottery__price">Price is $20</div></section><section class="pottery" id="pottery--3"><h2 class="pottery__shape">Platter</h2><div class="pottery__properties">Item weighs 7 grams and is 2 cm in height</div><div class="pottery__price">Price is $40</div></section>`);
    }
    catch (error) {
        throw error
    }
    finally {
        browser.close()
    }

})
