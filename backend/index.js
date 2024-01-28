import dotenv  from "dotenv"
dotenv.config()


import connectDB from "./database/index.js"
import { app } from "./app.js"
const port = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.on("error",(error)=>{
        console.log("ERROR: ", error);
        throw error
    })
    
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB connection failed !!", error);
})


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

