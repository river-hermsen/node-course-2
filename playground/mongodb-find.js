const {MongoClient, ObjectID} = require('mongodb');

console.log('Connecting to MongoDB server...');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp');

  // // db.collection('Todos').find({
  // //   _id: new ObjectID('5ae0c9849eec55337c7f07bb')
  // // }).toArray().then((docs) => {
  // //   console.log(JSON.stringify(docs, undefined, 2));
  // // });
  //
  // db.collection('Todos').find({
  //
  // }).count().then((amount) => {
  //   console.log(amount);
  // });
  db.collection('Users').find({
    name: 'BI'
  }).toArray().then((amount) => {
    console.log(amount);
  })
  client.close();
});
