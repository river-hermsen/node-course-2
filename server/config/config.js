var mongoose = require('mongoose');


var env = process.env.NODE_ENV || 'development';
var urlMongoDB;
if (env === 'development') {
  process.env.PORT = 3000;
  urlMongoDB = "mongodb://localhost:27017/TodoApp";
} else if (env === 'test') {
  process.env.PORT = 3000;
  urlMongoDB = "mongodb://localhost:27017/TodoAppTest";
} else {
  urlMongoDB = "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node";
}


mongoose.Promise = global.Promise;

// var urlMongoDB = process.env.PORT ? "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node" : "mongodb://localhost:27017/TodoApp";
// if (process.env.PORT) {
//   var urlMongoDB = "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node"
// } else {
//   var urlMongoDB = "mongodb://localhost:27017/TodoApp";
// }
mongoose.connect(urlMongoDB);

module.exports = {mongoose};
