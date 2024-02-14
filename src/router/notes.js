const { Router } = require('express')

const notas = Router()

notas.get('/notas', (req,res)=> {
    res.send('Hola')
})
notas.get('/notas/:id', (req,res)=> {
    res.send('Hello World')
})



module.exports = notas

