//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to DB')
    }

    console.log('Connected to MongoDB server');
    // db.collection('Todos').deleteOne({text:'Eat lunch', completed:false})
    //     .then((result)=>{
    //         console.log(result);
    //     });

    db.collection('Todos').findOneAndDelete({text:'Eat lunch', completed:true})
         .then((result)=>{
             console.log(result);
         });
   
   // db.close();
});
