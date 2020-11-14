var db = db.getSiblingDB("example");

//1 Cuyo campo “gender” sea igual a “male”
var query = { gender: "male"};
var cursor = db.userDemo.find(query);
// cursor.forEach(printjson);

//2 Donde “gender” sea igual a “female” y “age” sea mayor a 28.
// query = {$and:[{gender: "female"},{age:{$gt:28}}]};
// cursor = db.userDemo.find(query);
// cursor.forEach(printjson);

//3 Donde “eyeColor” sea “green” o “brown” y “balance” menor a 2000
// query = {
//             $and:[
//                 {   $or:[
//                         {eyeColor: "green"},
//                         {eyeColor: "brown"}
//                     ]
//                 },
//                 {balance: {$lt: 2000}}
//             ]
//         };

// cursor = db.userDemo.find(query);
// cursor.forEach(printjson);

//4 Agregar el campo “influencer” con valor “true” (Boolean) en los documentos que 
//contengan el tag “ex”.
// var cursor2 = db.userDemo.aggregate([
//     { $match:{tags: "ex"}}
// ]);

// while(cursor2.hasNext()) {
//     var data = cursor.next();
//     data.influencer = true;
//     db.userDemo.update({tags: "ex"},{data}) //Actualiza un doc
// }


//5 Obtener la suma total del campo balance para los documentos agrupados por el campo “gender”.
// var cursor2 = db.userDemo.aggregate([
//     {
//         $group: {
//             _id: "$gender",
//             total: {$sum: "$balance"}
//         }
//     }
// ]);

// cursor2.forEach(printjson);

//6 Obtener todas las “company” distintas de la colección “userDemo”
var cursor2 = db.userDemo.aggregate([
    {$project: {_id:0, company:1}}
]);

cursor2.forEach(printjson);

