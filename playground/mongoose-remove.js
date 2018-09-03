const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
Todo.remove({}).then((result) => {
	console.log(result);
});*/

/*Todo.findOneAndRemove('_id: 5b8ce86580e0bc31e42342bf').then((todo) => {
	console.log(todo);
});*/

Todo.findByIdAndDelete('5b8ce86580e0bc31e42342bf').then((todo) => {
	console.log(todo);
});
