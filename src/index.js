const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const notes = require('./notas.json')
require('./mongo')
const Note = require('./models/note')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3000

app.get('/notas', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
      })
})
app.get('/notas/:id', (req, res) => {
    const id = Number(req.params.id)
    const nota = notes.find(note => note.id === id)
    console.log(nota);
    if (nota) {
         res.json(nota)
    } else { 
        res.status(404).end() 
    }
})

app.listen(PORT, () => {
    console.log(`Puerto abierto en el http://localhost:${PORT}`)
})