const express = require('express')
const { Skills } = require('./models')
const PORT = process.env.PORT || 3000
const app = express()





app.get('/', (req, res) => {
    res.send("This is root!")
})

app.get('/skills', async (req, res) => {
    const skills = await Skills.findAll()
    res.json(skills)
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});
