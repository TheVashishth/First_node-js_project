const express = require("express");
const app = express();

app.use(express.json());

const movies = [
    {id : 1 , name : "Action"},
    {id : 2 , name : "Adventure"},
    {id : 3 , name : "Thriller"},
]

app.get("/api/movies/genre", (req,res)=>{

    res.send(movies);

});

app.post("/api/movies/genre", (req,res)=>{

    const movie ={
        id : movies.length +1 , 
        name : req.body.name ,
    };

    movies.push(movie);
    res.send(movie);
});

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening on ${port}....`);
});