// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Matteo',
    //     age: 27,
    //     Location: 'Detroit, MI'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('couldnt add teh user')
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = require('url');

// // Connection URL
// // const myUrl = new URL('mongodb://localhost:27017');
// const myUrl = new URL({ toString: () => 'mongodb://localhost:27017' });

// // Database Name
// const dbName = 'TodoApp';

// // Use connect method to connect to the server
// MongoClient.connect(myUrl.href, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });
