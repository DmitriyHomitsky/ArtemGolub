var React = require('react');


var Router = require('react-router')
 , RouteHandler = Router.RouteHandler
 , Route = Router.Route
 , NotFoundRoute=Router.NotFoundRoute
 , Link = Router.Link;

 
var Layout = React.createClass({
	render:function(){
    return (
        <div>
          <RouteHandler/>
        </div>
    );
  }
});

module.exports = Layout;