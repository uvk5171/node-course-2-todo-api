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
	
	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b866a1d0044c23f9849e6e4') 
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b878343a869ff311cf6fc98') 
	}, {
		$set: {
			name: 'Uttara'
		},
		$inc: {
			age: 15
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//client.close();
});
	