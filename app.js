const express = require('express'),
	    app     = express(),
	    axios   = require('axios'),
      port    = process.env.PORT || 8008;

app.use(express.static("public"));
app.set("view engine","ejs");
    
app.get('/', (req, res) => {
 res.render('index');
});


//////////////////////////////////
app.get('*', (req, res) => {
 res.send('Lost');
});

app.listen(port, process.env.IP, function () {
  console.log('App listening on port 8008!');
});