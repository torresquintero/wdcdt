var mongoose = require('mongoose');

var congressmenSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  party: String
});

congressmenSchema.methods.create = function(firstname,lastname,inputparty) {
  var newperson = new Congressmen({
    name: { first: firstname, last: lastname },
    party: inputparty
  });
  newperson.save();
}

mongoose.model('Congressmen', congressmenSchema);
