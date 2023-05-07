import { Page } from 'puppeteer'

const TOKEN_COOKIE = 'JSESSIONID'
const SESSION_COOKIE = 'li_at'

export const getToken = async (page: Page): Promise<string | undefined> => {
    const cookies = await page.cookies()
    const token = cookies.find((cookie) => cookie.name === TOKEN_COOKIE)
    return token?.value
}

export const setSessionCookie = async (
    page: Page,
    value: string
): Promise<void> => {
    await page.setCookie({
        name: SESSION_COOKIE,
        value: value,
    })
}
