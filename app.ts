import express from 'express'
import path from 'path'

const userInfoRouter = require('./routes/users')

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', userInfoRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

module.exports = app
