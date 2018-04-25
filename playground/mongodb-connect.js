const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


console.log('Connecting to MongoDB server...');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });
  // db.collection('Users').insertOne({
  //   name: 'River',
  //   age: 11,
  //   location: 'Amsterdam'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  client.close();
});
