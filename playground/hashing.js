const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 10
}

var token = jwt.sign(data, 'add2345');
console.log(token);
var decoded = jwt.verify(token, 'add2345');
console.log('decoded',decoded);

// var message = 'I am User Vivek';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token ={
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'vivek.k').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resuldHash = SHA256(JSON.stringify(token.data) + 'vivek.k').toString();

// if (resuldHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed, Do not trust!!');
// }