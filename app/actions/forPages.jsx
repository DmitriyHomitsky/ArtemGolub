
var Request=require('qajax');
var Reflux=require('reflux');
var server = require('config').server;
var Actions=Reflux.createActions([
	"index",
	"index_complete"
]);

Actions.index.listen(function(url) {

	Request({url:server+url.join('/'),method:"GET" })
	.then( 
		function(data){
			Actions.index_complete(data,url);
		},
		function (err) {Actions.error("back-end",err.status,err.statusText+err.responseURL+err.response);}
		);
});

module.exports = Actions;