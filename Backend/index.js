import connectDB from './src/DB/CoonectToDB.js';
import app from './app.js'
const PORT = process.env.PORT  || 8080

connectDB().then(
    () =>(
        app.listen(PORT, () =>(
            console.log(`Server started on : ${PORT}`)
        ))
    )
)
.catch((err) => (
    console.log(`Erroe occured at server starting : ${err}`)
))