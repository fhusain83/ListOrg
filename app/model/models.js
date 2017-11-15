var UserMeta = require('./User.js'),
 ListMeta = require('./List.js'),
 EventMeta = require('./Event.js'),
    connection = require('../sequelize.js');

var User = connection.define('users', UserMeta.attributes, UserMeta.options);
var Event = connection.define('events', EventMeta.Events, EventMeta.options);
var List = connection.define('lists', ListMeta.Lists, ListMeta.options);

// you can define relationships here

module.exports.User = User;
module.exports.Event = Event;
module.exports.List = List;