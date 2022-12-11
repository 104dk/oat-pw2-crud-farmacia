const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 0420
const db = require('./src/utils/db')
const itensRouter = require('./src/routes/item.route')
const userRouter = require('./src/routes/users.route')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('api-farmarcia on-line.')
})


app.use('/api/v1/itens', itensRouter)

app.use('/api/v1/users', userRouter)


app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })

app.listen(port, () => {
    console.log(`escutando porta ${port}`)
})