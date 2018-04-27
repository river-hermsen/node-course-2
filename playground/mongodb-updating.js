const {
  MongoClient,
  ObjectID
} = require('mongodb');

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
  try {
    db.collection('Users').updateOne({
      _id: new ObjectID('5adceb21ba2cf015900a0246')
    }, {
      $inc: {
        age: 1
      },
      $set: {
        name: 'NICE'
      }
    }).then((data) => {
      if (data.modifiedCount > 0) {
        console.log('Data has been succesfully updated');
      } else {
        console.log('Data has not been updated');
      }
    })
  } catch (e) {
    console.log(e);
  }

  client.close();
});
