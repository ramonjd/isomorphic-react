/** @jsx React.DOM */;
var App, Location, Locations, ProductList, ProductView, React, Router;

React = require('react');

Router = require('react-router-component');

Locations = Router.Locations;

Location = Router.Location;

ProductList = require('./components/ProductList.jsx');

ProductView = require('./components/ProductView.jsx');

App = React.createClass({
  render: function() {
    return (
        <html>
          <head lang="en">
              <meta charSet="utf-8"/>
              <title>React App</title>
              <link rel="stylesheet" href="/css/styles.css"/>
          </head>
          <body>
              <div id="main">
                  <Locations path={this.props.path}>
                      <Location path="/" handler={ProductList} />
                      <Location path="/product/:id" handler={ProductView} />
                  </Locations>
              </div>
              <script src="/js/bundle.js"></script>
          </body>
         </html>
      );
  }
});

module.exports = App;
