print("MongoDB: Aggregate");

var db = db.getSiblingDB("video");

db.movieDetails.dropIndexes();

db.movieDetails.createIndex({countries: 1}, {name: "miIndice"});

var query = { countries: "USA"};

var cursor = db.movieDetails.find(query).explain("executionStats"); //me va a devolver un set de estadisticas del resultado de esta ejecucion

printjson(db.movieDetails.getIndexes());

printjson(cursor);