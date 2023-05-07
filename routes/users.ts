import express, { Request, Response } from 'express'
import { getBrowserInstance, pageInstance } from '../utils/page'
import { setSessionCookie } from '../utils/cookie'
import { getUserInfo } from '../parser/userInfo'

const router = express.Router()

router.get('/:id', async function (req: Request, res: Response) {
    const browser = await getBrowserInstance()
    const page = await pageInstance(browser)
    await setSessionCookie(page, req.params.id)

    const result = await getUserInfo(page)
    await browser.close()

    res.send(result)
})

module.exports = router
