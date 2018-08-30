//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to Mongo');
	}
	console.log('Connected Mongo');

	const db = client.db('TodoApp');

	/*db.collection('Todos').deleteMany({text: 'Eat asd'}).then((result) => {
		console.log(result);
	});*/

	/*db.collection('Todos').deleteOne({text: 'asd asd'}).then((result) => {
		console.log(result);
	});*/

	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});

	//client.close();
});
	