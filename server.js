var express = require('express'),
		app = express(),
		path = require('path'),
		route = require('./routes/route.js'),
		//magic
		saphire = require('saphire'),
		saphireAdmin = require('saphire-admin'),
		saphireRegions = require('saphire-regions'),
		render = saphireRegions.render.bind(saphireRegions);

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/"),
	templates:"jade"
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');
app.set('view engine', conf.templates);

saphireRegions.use("./public");
saphireAdmin.routes(app)

route.create(app, {
	url:"/",
	template:"index.jade"
}, /*data*/{render:render});

//console.log(app._router.stack[2])
