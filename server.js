var express = require('express'),
		app = express(),
		path = require('path'),
		route = require('./routes/route.js'),
		//magic
		saphire = require('saphire').functions,
		saphireData = require('saphire').data,
		saphireAdmin = require('saphire-admin');

app.locals.inspect = require('util').inspect;

var conf = {
	port:3000,
	root:path.normalize(__dirname +"/public/"),
	templates:"jade"
}

app.listen(conf.port);
app.set('views', __dirname + '/public/views/');
app.set('view engine', conf.templates);

saphire.set("public","./public")
saphire.set("db",{
	host:"127.0.0.1",
	port:"27017",
	database:"saphire"
});

saphire.db("mongodb")
saphireAdmin.routes(app, saphire.use(saphire.public()));

route.create(app, {
	url:"/",
	template:"index.jade"
}, /*data*/{render:saphire.render});


console.log(saphire)
