import dotenv  from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import connectDB from "./database/index.js"

connectDB()

const app = express()
const port = process.env.PORT | 3000;

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}`)
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error);
//             throw error
//         })
//         app.listen(port, () => {
//             console.log(`Server started on port ${port}`);
//         })
//     }
//     catch(error)
//     {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()



// app.get('/', (req, res)=> {
//     res.send('Hello World!')
// })

// app.get('/api/twitter' , (req, res) => {
//     res.send('sasukedotcom')
// })

// app.get('/api/login', (req, res) => {
//     res.send('<h1>App Login</h1>')
// } )

