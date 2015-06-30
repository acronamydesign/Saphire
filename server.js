var express = require('express'),
		app = express(),
		path = require('path'),
		saphire = require('saphire').functions;

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/")
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');

saphire.start(app);
