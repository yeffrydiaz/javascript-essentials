var express = require('express'),
	app     = express(),
	axios   = require('axios');

	app.use(express.static("public"));
    app.set("view engine","ejs");
    
app.get('/', function (req, res) {
 res.render('index');
});


//////////////////////////////////
app.get('*', function (req, res) {
 res.send('Lost');
});

var port = process.env.PORT || 8008;
app.listen(port, process.env.IP, function () {
  console.log('App listening on port 8008!');
});