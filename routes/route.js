function route(){

	this.create = function(engine, path, data){

		if(data == undefined){
			data == null;
		}

		if(typeof path === "string"){
			//basic
			return engine.get("/"+path, function(req, res){
				res.render(path, data);
			});
		}
		else if(typeof path === "object"){
			//accepts url for browser and path to template
			return engine.get("/"+path.url, function(req, res){
				res.render(path.template, data);
			});
		}

	}

}

route = new route();

module.exports = route;
