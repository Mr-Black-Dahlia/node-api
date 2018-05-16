// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp');


    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').deleteMany({
        name: 'Matteo'
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5afbb6f6f879fcde94251ab7')
    });


    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//     console.log(result)
// })

// db.collection('Todos').deleteMany({
//     text: 'eat lunch'
// }).then((result) => {
//     console.log(result)
// });


    // db.collection('Users').find({
    //     name: 'Matteo'
    // }).count().then((count) => {
    //     console.log(`Matteo count: ${count}`);
        
    // }, (err) => {
    //     console.log('unable to feth', err);
    // });


    client.close();
});


