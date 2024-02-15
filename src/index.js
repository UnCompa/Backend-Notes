const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const notes = require('./notas.json')
require('./mongo')
const Note = require('./models/note')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT ?? 3000

app.get('/notas', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})
app.get('/notas/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {
        if (note) {
            res.json(note)
        } else {
            res.status(404).end()
        }
    })
})
app.post('/notas/', (req, res) => {
        const body = req.body

        if (body.content === undefined) {
            return res.status(400).json({ error: 'content missing' })
        }

        const note = new Note({
            title: body.title,
            content: body.content,
            important: body.important || false,
        })

        note.save().then(savedNote => {
            res.json(savedNote)
        })
    })

    app.listen(PORT, () => {
        console.log(`Puerto abierto en el http://localhost:${PORT}`)
    })