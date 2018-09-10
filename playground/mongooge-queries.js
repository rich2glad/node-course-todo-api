const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b96c4431ccfc80052e74640';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     if(!todo)
//      return   console.log('ID not found');
       
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo)
//      return   console.log('ID not found');
       
//     console.log('Todo',todo);
       
// }).catch((e) => console.log(e));

User.findById('5b92d9b32805b6204a32cfab').then((user)=>{
    if(!user)
        return console.log('USer not found');
    
    console.log(JSON.stringify(user))
},(e)=>{
    console.log(e);
});
