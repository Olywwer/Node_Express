const express = require('express')

const app = express()

app.use(express.static('Public'))

var porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`)
})