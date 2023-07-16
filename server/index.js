const express = require('express')
const app = express()
const port = 3000


// importing routes
const loginRouter = require('./routes/login');

// using routes
app.use('/test',loginRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})