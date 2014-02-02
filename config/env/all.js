'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL,

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'fsdffsd877g78df0fsd097dsdf0g9df7gs89df7gs9879df078',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessians'
}
