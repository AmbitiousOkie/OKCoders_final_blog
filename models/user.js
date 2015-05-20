// Connects to the MongoDB and sets the schema/requirements
// Exports this as the "User" variable

var mongoose = require('mongoose');

var schema = mongoose.Schema({
  email: {type: String, require: true, trim: true, unique: true},  //exameine closely
  password: {type: String, require: true},
  admin: {type: Boolean, default: false}
});

var User = mongoose.model('users', schema);
//module.exports = User;  //Capital U means this is an object



// bcrypt - Encryption tool

var bcrypt = require('bcrypt');

schema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

schema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('users', schema);
module.exports = User;
