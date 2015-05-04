var express = require('express'),
		app = express(),
		path = require('path'),
		globals = require('./globals.js'),
		route = require('./routes/route.js'),
		blocks = require('./blocks.js'),
		regions = require('./regions.js');

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/"),
	templates:"jade"
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');
app.set('view engine', conf.templates);

var render = function(regionName){
	return "<"+region[regionName]['wrapper']+" class='"+region[regionName]['class']+"' "+region[regionName]['dataFormatted']+">"+region[regionName]['blocks']+"</"+region[regionName]['wrapper']+">";
}

route.create(app, {
	url:"/",
	template:"index.jade"
}, /*data*/{
	regions:regions,
	render:render
});
