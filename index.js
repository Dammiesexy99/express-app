const express = require('express')
const app = express();
const port = 3032

app.get('/homepage', (request, response) => {
    response.send('Welcome to My Home-Page')
})

app.get('/service', (request, response) => {
    response.send('Welcome to our Service Page where all your Requests are met')
})

app.get('/contact', (request, response) => {
    response.send('Feel Free to Contact Us')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})