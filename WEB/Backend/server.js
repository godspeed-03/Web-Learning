import express from 'express';


const app = express();

app.get('/', (req, res) =>{
    res.send('server is good to go')
})
app.get('/user', (req, res) =>{
    res.send('User name is Satyam')
})

const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log('serveris running at 8080')
})