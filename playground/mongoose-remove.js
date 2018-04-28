const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5ae4c8b991d8c42f88abff2c').then((todo) => {
  console.log(todo);
});
