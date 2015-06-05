var express = require('express'),
		app = express(),
		path = require('path'),
		route = require('./routes/route.js'),
		//magic
		saphire = require('saphire').functions;

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/"),
	templates:"jade"
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');
app.set('view engine', conf.templates);


//KEEP
saphire.start(app);

//NEED TO CHANGE
//saphireAdmin.routes(app, app.settings.views);


