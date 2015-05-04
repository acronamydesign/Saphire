//pretty up the status measages
var colors = require('colors');

var notify = new Object();

notify.init = function(status, measage){
	status = "["+ status +"]";
	console.log(status.green+" "+ measage +"\r\n");	
}
notify.list = function(measage){
	console.log(measage.yellow);
}

module.exports = notify;
