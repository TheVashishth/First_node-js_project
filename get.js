const express = require("express");
const app = express();

const movies = [
    {id : 1 , name : "Action"},
    {id : 2 , name : "Adventure"},
    {id : 3 , name : "Thriller"},
]

app.get("/api/movies/genre", (req,res)=>{

    res.send(movies);

});

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening on ${port}....`);
});