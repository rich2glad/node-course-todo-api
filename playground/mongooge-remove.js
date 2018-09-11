const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(remove);
// });

// Todo.findOneAndRemove({}).then((result)=>{

// });

Todo.findByIdAndRemove('5b96d127b2743c1bd8907e28').then((result)=>{
    console.log(result);
});