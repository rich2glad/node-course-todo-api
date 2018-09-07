//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to DB')
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({_id: new ObjectID('5b92b2ac5ff12f3b10ad29df')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch',err);
    // });;

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count : ${count}`)
    // },(err)=>{
    //     console.log('unable to fetch',err);
    // });

    db.collection('Users').find({name: 'Richerd'}).toArray().then((docs)=>{
             
             console.log(JSON.stringify(docs,undefined,2));
         },(err)=>{
             console.log('unable to fetch',err);
         });;
   
    db.close();
});
