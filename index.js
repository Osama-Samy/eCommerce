// E-commerce

import express from "express"
import { dbConnection } from "./database/dbConnection.js"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import { bootstrap } from "./src/index.router.js"
import morgan from 'morgan'



const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, "./config/.env") })
const app = express()
app.use(morgan('dev'))
const port = process.env.PORT || 3000
bootstrap(app)

dbConnection()
app.use(express.json())

app.listen(port, () => console.log(`Server running successfully on port ${port}!`))
