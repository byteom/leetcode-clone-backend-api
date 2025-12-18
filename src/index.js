import express from "express"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT ||5000


const app = express()


app.get("/",(req,res)=>{
    res.json({
        success: true,
        message:"Welcome to the backend"
    })
})


app.listen(PORT,()=>console.log(`Backedn is running on ${PORT}`))