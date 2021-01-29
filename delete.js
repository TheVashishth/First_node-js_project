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


app.delete("/api/movies/genre/:id", (req,res)=>{
    const movie = movies.find(c => c.id == parseInt(req.params.id));
    console.log(movie)
    if (!movie){
        res.status(404).send("You Enter the incorrect ID");
    }
    const index = movies.indexOf(movie);
    movies.splice(index,1);

    res.send(movie);
    
});

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening on ${port}....`);
});