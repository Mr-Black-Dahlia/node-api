// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp');


db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5afbb711f879fcde94251abf')
},{
    $set: {
        name: 'Matteo'
    },
    $inc: {
        age: 1
    }
})


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5afbbc68f879fcde94251b97')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    client.close();
});


