
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// function connectDB(){}
dotenv.config({
    path: './env'
})

connectDB()

/*
import { Express } from "express";
const app=express()
(async()=>{
    try{
        await mongoose.connect(`${(process.env.MONGODB_URI)}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })
    }catch(error){
        console.log("Error: ",error);
        throw err
    }
})()

*/