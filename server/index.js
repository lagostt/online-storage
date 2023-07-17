const express = require('express')
const app = express()
const port = 3000

//options
app.use(express.json())
app.use(express.urlencoded())
// importing routes
const loginRouter = require('./routes/sign-in')
const registerRouter = require('./routes/sign-up')
// using routes
app.use('/signin',loginRouter)
app.use('/signup',registerRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})