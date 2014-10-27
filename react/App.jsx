/** @jsx React.DOM */;
var App, Location, Locations, React, Router;

React = require('react');

Router = require('react-router-component');

Locations = Router.Locations;

Location = Router.Location;

App = React.createClass({
  render: function() {
    return (
        <html>
          <head lang="en">
              <meta charSet="utf-8"/>
              <title>React App</title>
          </head>
          <body>
              <div id="main">
                  <Locations path={this.props.path}>
                      <Location path="/" handler={PostList} />
                      <Location path="/post/:id" handler={PostView} />
                  </Locations>
              </div>
              <script type="text/javascript" src="/scripts/bundle.js"></script>
          </body>
         </html>
      );
  }
});

module.exports = App;
