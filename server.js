var express = require('express'),
		app = express(),
		path = require('path'),
		route = require('./routes/route.js'),
		//magic
		saphire = require('saphire-regions'),
		render = saphire.render.bind(saphire);

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/"),
	templates:"jade"
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');
app.set('view engine', conf.templates);

saphire.use("./public");

route.create(app, {
	url:"/",
	template:"index.jade"
}, /*data*/{render:render});


console.log(saphire)
