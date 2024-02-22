import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import path from 'path'; 

dotenv.config()

const app = express()

app.use(cors(

    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json(
    {
        limit: "16kb"
    }
))


app.use(express.urlencoded(
    {
        extended: true,
        limit: "16kb"
    }
))
app.use(cookieParser())

//app.use(express.static("public"))
if(process.env.NODE_ENV === 'production')
{
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    app.get("*", (req, res)=> res.sendFile(path.resolve(__dirname,'..' ,'frontend', "dist", 'index.html')))
}
else
{
    app.get('/', (req, res) => res.send('server is ready'));

}



//router import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)



export { app }