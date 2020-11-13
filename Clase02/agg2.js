print("MongoDB: Aggregate");

var db = db.getSiblingDB("video");

/*var cursor = db.movieDetails.aggregate([
    {$match: {year: {$eq: 1998}} },
    {
        $group: {
            _id: "$year",  //id del calculo y no de MongoDB
            promedio_duracion: {$avg: "$runtime"}
        }     
    }    
]);*/

/*var cursor = db.movieDetails.aggregate([
    {$match: {actors: "Jeff Bridges"}},
    {
        $group: {
            _id: "Nominaciones",
            total_nominaciones: {$sum: "$awards.nominations"}
        }
    }
]);*/

//cursor.forEach(printjson);

//Por cantidad de votos en imbd, cuales son los primeros 7 mejores thrillers de la coleccion
var cursor = db.movieDetails.aggregate([
    {$match: {genres: {$eq:"Thriller"}}},
    {
        $group: {
            _id: "$title",
            total: {$sum: "$imdb.votes"}
        }
    },
    {$sort: {"total":-1}},
    {$limit: 7}
]);

cursor.forEach(printjson);

