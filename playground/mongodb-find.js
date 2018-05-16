// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5afbab7da4162c3a600d5076')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to feth', err);
    // });

    db.collection('Users').find({
        name: 'Matteo'
    }).count().then((count) => {
        console.log(`Matteo count: ${count}`);
        
    }, (err) => {
        console.log('unable to feth', err);
    });


    client.close();
});


