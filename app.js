// Import our express and our configuration
var express = require('express');

// Create our express app
var app = express();

//connect to mongoose for database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/congressmen');


require('./schemas/congressmen'); //giving me access to the schema
var Congressmen = mongoose.model('Congressmen'); //accessing the model


app.set('port', (process.env.PORT || 5000));


//static files get loaded through public directory
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  var newperson = new Congressmen({
    name: {
      first: "Joe",
      last: "Schmo"
    },
    party: "Independent"
  });
  newperson.save();
  console.log(newperson.name.first);

  response.send('I made a change again!');
});
app.get('/test', function(request, response) {
  response.send(__dirname + '/public/test.html');
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
