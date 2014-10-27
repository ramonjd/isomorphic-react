/** @jsx React.DOM */;
var ProductView, React, ReactAsync, request;

React = require('react');

request = require('superagent');

ReactAsync = require('react-async');

ProductView = React.createClass({
  mixins: [ReactAsync.Mixin],
  getInitialStateAsync: function(callback) {
    var id;
    id = this.props.id;
    request.get('http://localhost:8000/json/products.json').end(function(response) {
      return callback(null, {
        products: response.body
      });
    });
  },
  render: function() {
    var id;
    id = this.props.id;
    return (
      <div className="singleProduct">
        <p>{this.state.products.products[id].desc}</p>
        <p>
          <a href="/">Back</a>
        </p> 
      </div>
    );
  }
});

module.exports = ProductView;
