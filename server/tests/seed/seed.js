const {
  ObjectID
} = require('mongodb');
const jwt = require('jsonwebtoken');

const {
  Todo
} = require('./../../models/todo');
const {
  User
} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'user1seed@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({
      _id: userOneId,
      access: 'auth'
    }, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'user2seed@example.com',
  password: 'userTwoPass'
}, {
  _id: userThreeId,
  email: 'user3seed@example.com',
  password: 'userThreePass'
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var allUsers = [];
    for (var i = 0; i < users.length; i++) {
      allUsers.push(new User(users[i]).save());
    }
    return Promise.all([allUsers]);
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
};
