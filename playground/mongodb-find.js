//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to Mongo');
	}
	console.log('Connected Mongo');

	const db = client.db('TodoApp');

	/*db.collection('Todos').find({
		_id: new ObjectID('5b866a1d0044c23f9849e6e4')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/
	

	/*db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/
	
	db.collection('Users').find({name: 'vivek'}).toArray().then((users) => {
		console.log(`Users`);
		console.log(JSON.stringify(users, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch users', err);
	});
	//client.close();
});
	