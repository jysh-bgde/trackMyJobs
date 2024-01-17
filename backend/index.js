require("dotenv").config()
const express = require("express")


const app = express()
const port = process.env.PORT | 3000;

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

app.get('/api/twitter' , (req, res) => {
    res.send('sasukedotcom')
})

app.get('/api/login', (req, res) => {
    res.send('<h1>App Login</h1>')
} )

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})