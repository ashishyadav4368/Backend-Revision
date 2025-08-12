// require('dotenv').config()
import dotenv from "dotenv"

import express from "express";
import connectDB from "./db/index.js";
const app = express();
dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("server is running ")
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err)
    })













// ; (async () => {
//     try {
//         await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error:", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log("server is running")
//         })
//     } catch (error) {
//         console.error("Error: ", error)
//     }
// })();