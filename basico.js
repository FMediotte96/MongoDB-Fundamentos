print("MongoDB Fundamentos");

printjson(db.adminCommand("listDatabases"));

//var db = db.help();
var db = db.getSiblingDB("autos");

print(db.getCollectionNames());

//printjson();

/*for(var i = 0; i < 5; i++) {
    db.test.insertOne({id:i, test:"Soy el ID" + i});
}*/

db.inventario.insertOne({marca:"ford", color: "Blue", año: 1990});
db.inventario.insertOne({marca:"ford", color: "Red", año: 1997});
db.inventario.insertOne({marca:"ford", color: "Blue", año: 1999});
db.inventario.insertOne({marca:"ford", color: "Red", año: 2000});
db.inventario.insertOne({marca:"ford", color: "Red", año: 1969});

var cursor = db.test.find();

while(cursor.hasNext()) {
    printjson(cursor.next());
}