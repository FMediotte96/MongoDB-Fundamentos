print("MongoDB: Aggregate");

var db = db.getSiblingDB("video");

/*var cursor = db.movieDetails.aggregate([
    {$match:{year: {$lte:1980}}},
    {$sort: {year: -1}},
    {$project: {_id:0, title:1, year:1, awards:1}},
    {$limit:7}
]);*/

cursor.forEach(printjson);

//Docs entre el año 2000 y 1990 genero comedia, orden descendente
var cursor2 = db.movieDetails.aggregate([
    {
        $match:
        {   $and:[
                {year:{$lte:2000}}, 
                {year:{$gte:1990}},
                {genres:{$eq:"Comedy"}}
            ]
        }
    },
    {$sort:{year: -1}}
]);

cursor2.forEach(printjson);