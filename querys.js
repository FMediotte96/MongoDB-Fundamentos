print("MongoDB Fundamentos -  Query Language");

printjson(db.adminCommand("listDatabases"));

//var db = db.help();
var db = db.getSiblingDB("autos");

print(db.getCollectionNames());

var query = { color: "Blue"}; //Sin operador busca por documentos, objetos y cualquier tipo de dato
query = { color: {$eq: "Red"}};
query = { año: {$eq: 1990}};
query = { año: {$lt: 1998}};
query = { año: {$lte: 1998}};
query = { año: {$gt: 1999}};
query = { año: {$lt: 1970}};
query = {$and:[{color:{$eq:"Red"}},{año:{$lt:2000}}]};
query = {$or:[{color:{$eq:"Red"}},{año:{$lt:2000}}]};
//query = {"countries.2":"USA"}
// {"imdb.rating":9}

var cursor = db.inventario.find(query);

while(cursor.hasNext()) {
    printjson(cursor.next());
}

printjson("Total Documentos " + cursor.count());