const expect = require('expect');
const request = require('supertest');

const {ObjectID} =require('mongodb');
const {app}= require('./../server');
const {Todo}= require('./../models/todo');
const {User}= require('./../models/user');
const {todos,populateTodos,users,populateUsers} = require('./seed');

beforeEach(populateUsers);
beforeEach(populateTodos);

// describe ('POST /todos',()=>{
//     it('should create a new Todo',(done)=>{
//         var text = 'Test Todo text';
//         request(app)
//             .post('/todos')
//             .send({text})
//             .expect(200)
//             .expect((res)=>{
//                 expect(res.body.text).toBe(text);
//             })
//             .end((err,res)=>{
//                 if(err){
//                     return done(err);
//                 }
//                 Todo.find().then((todos)=>{
//                     expect(todos.length).toBe(3);
//                     expect(todos[2].text).toBe(text);
//                     done();
//                 }).catch((e)=>done(e));
//             });
//     });
//     it('should not create todo with invalid body data',(done)=>{
//         request(app)
//             .post('/todos')
//             .send({})
//             .expect(400)
//             .end((err,res)=>{
//                 if(err){
//                     return done(err);
//                 }
//                 Todo.find().then((todos)=>{
//                     expect(todos.length).toBe(2);
//                     done();
//                 }).catch((e)=>done(e));
//             });
//     });
// });

// describe ('GET /todos',()=>{
//     it('Should get all todos',(done)=>{
//         request(app)
//         .get('/todos')
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body.todos.length).toBe(2)
//         })
//         .end(done);
//     })
// });

// describe ('GET /todos/:id',()=>{
//     it('should return a todo doc',(done)=>{
//         request(app)
//         .get(`/todos/${todos[0]._id.toHexString()}`)
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body.todo.text).toBe(todos[0].text);
//         })
//         .end(done);
//     });

//     it('should return a 404 valid',(done)=>{
//         request(app)
//         .get(`/todos/${(new ObjectID()).toHexString()}`)
//         .expect(404)
//         .end(done);
//     });

//     it('should return a 404 for invalid id',(done)=>{
//         request(app)
//         .get('/todos/123')
//         .expect(404)
//         .end(done);
//     });
// });

// describe ('DELETE /todos/:id',()=>{
//     it('should remove a todo doc',(done)=>{
//         request(app)
//         .delete(`/todos/${todos[0]._id.toHexString()}`)
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body.todo.text).toBe(todos[0].text);
//         })
//         .end((err,res)=>{
//             if(err){
//                 return done(err);
//             }
//             Todo.findById(todos[0]._id.toHexString()).then((todo)=>{
//                 expect(todo).toNotExist();
//                 done();
//             }).catch((e)=>done(e));
//         });
//     });

//     it('should return a 404 valid',(done)=>{
//         request(app)
//         .delete(`/todos/${(new ObjectID()).toHexString()}`)
//         .expect(404)
//         .end(done);
//     });

//     it('should return a 404 for invalid id',(done)=>{
//         request(app)
//         .get('/todos/123')
//         .expect(404)
//         .end(done);
//     });
// });

// describe ('PATCH /todos/:id',()=>{
//     it('should update the todo',(done)=>{
//         var text='This should be new text';
//         request(app)
//         .patch(`/todos/${todos[0]._id.toHexString()}`)
//         .send({
//             completed:true,
//             text
//         })
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body.todo.text).toBe(text);
//             expect(res.body.todo.completed).toBe(true);
//             expect(res.body.todo.completedAt).toBeA('number');
//         })
//         .end(done);
//     });

//     it('should clear completedAt when not completed',(done)=>{
//         var text='This should be new text';
//         request(app)
//         .patch(`/todos/${todos[1]._id.toHexString()}`)
//         .send({
//             completed:false,
//             text
//         })
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body.todo.text).toBe(text);
//             expect(res.body.todo.completed).toBe(false);
//             expect(res.body.todo.completedAt).toNotExist();
//         })
//         .end(done);
//     });

// });

describe('GET /users/me',()=>{
    it('should return user if authenticated',(done)=>{
        console.log(users[0].tokens[0].token);
        request(app)
        .get('/users/me')
        .set('x-auth', users[0].tokens[0].token)
        .expect(200)
        // .expect((res)=>{
        //     expect(res.body._id).toBe(users[0]._id.toHexString());
        //     expect(res.body.email).toBe(users[0].email);
        // })
        .end(done);
    });
    //  it('should return 401 user if not authenticated',(done)=>{
    //     request(app)
    //     .get('/users/me')
    //     .expect(401)
    //     .expect((res)=>{
    //         expect(res.body).toEqual({});
            
    //     })
    //     .end(done);
    //  });
});

// describe('POST /users',()=>{
//     it('should create a user',(done)=>{
//         var email = 'example@example.com';
//         var password = '123asd#';
//         request(app)
//         .post('/users')
//         .send({email,password})
//         .expect(200)
//         .expect((res)=>{
//             expect(res.headers['x-auth']).toExist();
//             expect(res.body._id).toExist();
//             expect(res.body.email).toBe(email);
//         })
//         .end((err)=>{
//             if(err){
//                 return done(err);
//             }
//             User.findOne({email}).then((user)=>{
//                 expect(user).toExist();
//                 expect(user.password).toNotBe(password);
//                 done();
//             })
//         });
//     });
//      it('should return validation error if it is request invalid',(done)=>{
//         request(app)
//         .post('/users')
//         .send({email:'dsf',password:'df'})
//         .expect(400)
//          .end(done);
//      });

//      it('should not create user if email in use',(done)=>{
//         request(app)
//         .post('/users')
//         .send({email:users[0].email,password:'dfg'})
//         .expect(400)
//         .end(done);
//      });
// });