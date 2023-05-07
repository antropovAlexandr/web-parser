import { Page } from 'puppeteer'
import { getToken } from '../utils/cookie'

export const getUserInfo = async (page: Page) => {
    const token = await getToken(page)

    return await page.evaluate(async (token: string | undefined) => {
        if (!token) {
            throw new Error('Token not defined')
        }
        const response = await fetch(
            'https://www.linkedin.com/voyager/api/me',
            {
                headers: {
                    accept: 'application/json',
                    'Csrf-Token': token,
                },
            }
        )
        return await response.json()
    }, token)
}
