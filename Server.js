const express = require('express')
const app = express()
const port = 4001
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));//to use body parser
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test' ,(req, res) => {///test is what you call on website = local:4001/test
    res.sendFile(path.join(__dirname + '/Index.html'))
})

app.get('/EXAMPLE',(req, res) => {
    res.send('EXAMPLE')
})

/*
app.get('/api',(req, res)=>{ //listening to the get method!! this works!
    res.send('KEVIN')
})
*/

app.get('/name',(req, res)=>{
    console.log(req.query.firstname),
    console.log(req.query.lastname)
    res.send('Hello from get '+ req.query.firstname + " " + req.query.lastname);
})



app.post('/name', (req, res)=>{
    console.log(req.body.firstname);
    res.send('Hello from Post ' + req.body.firstname + ' ' + req.body.lastname);
})

app.get('/api/movies',(req, res)=>{ //listening to the get method!!
    const myMovies = [

            {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
            ];
    res.status(200).json({movies:myMovies,
         message:'hello from the other side'});
})

app.get('/hello/:name',(req, res) => {
    console.log(req.params.name)
    res.send('hello '+req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))