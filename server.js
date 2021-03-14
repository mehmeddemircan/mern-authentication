require('dotenv').config({path:"./config/config.env"})

const express = require('express')
const authRouter =require('./routes/auth')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const privateRouter =require('./routes/private')
const app = express()


//Connect DB
connectDB()

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/private',privateRouter)

// Error handler   
app.use(errorHandler)

const PORT = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('Hello World!')
} )
const server =app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

process.on("unhandledRejection",(err,promise)=> {
    console.log(`Logged Error ${err}`);
    server.close(()=> process.exit(1))
})