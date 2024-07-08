const porta = 3003

const express =  require('express')
const app = express()
const bancoDeDados = ('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
   res.send(bancoDeDados.getProdutos()) //converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
   res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
   const produto = bancoDeDados
})

app.listen(porta, () => {
   console.log(`Servidor teste execultando na porta ${porta}.`)
})