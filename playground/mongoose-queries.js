const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5ae47d1e77ec8a32e0eae593';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos find', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo findOne', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log());


//User.findById

var id = '5ae3870854219d05dc9baa25';
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User: ', user);
}, (e) => {
  console.log(e);
});
