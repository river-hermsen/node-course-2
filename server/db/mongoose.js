var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var urlMongoDB = process.env.PORT ? "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node" : "mongodb://localhost:27017/TodoApp";
// if (process.env.PORT) {
//   var urlMongoDB = "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node"
// } else {
//   var urlMongoDB = "mongodb://localhost:27017/TodoApp";
// }
mongoose.connect(urlMongoDB);

module.exports = {mongoose};
