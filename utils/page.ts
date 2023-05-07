import puppeteer, { Browser, Page } from 'puppeteer'

export const getBrowserInstance = () => {
    return puppeteer.launch({ headless: 'new' })
}

export const pageInstance = async (browser: Browser): Promise<Page> => {
    const page = await browser.newPage()
    await page.goto('https://www.linkedin.com/')
    return page
}
