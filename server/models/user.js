var mongoose = require('mongoose');
var User = mongoose.model('Users', 
  { username: String },
  { password: String },
  { authkeys: [{ code: String, datetime: { type: Date, default: Date.now } }] }
);

module.exports = User;