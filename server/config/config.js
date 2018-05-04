var mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
console.log(`******* ${env} *******`);
var urlMongoDB;
if (env === 'production') {
  urlMongoDB = "mongodb://admin:admin@ds117109.mlab.com:17109/todo-node";
} else if (env === 'test') {
  process.env.PORT = 3000;
  urlMongoDB = "mongodb://localhost:27017/TodoAppTest";
} else {
  urlMongoDB = "mongodb://localhost:27017/TodoApp";
}

mongoose.Promise = global.Promise;
console.log(urlMongoDB);
mongoose.connect(urlMongoDB);

module.exports = {mongoose};
