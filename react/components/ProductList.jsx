/** @jsx React.DOM */;
var Link, Product, ProductList, React, ReactAsync, request;

React = require('react');

request = require('superagent');

ReactAsync = require('react-async');

Link = require('react-router-component').Link;

Product = React.createClass({
  render: function() {
    var product, url;
    product = this.props.product;
    url = '/product/' + product._id;
    return (
      <div className="Product">
          <span><Link href={url}>{product.name}</Link></span>
      </div>
    );
  }
});

ProductList = React.createClass({
  mixins: [ReactAsync.Mixin],
  getInitialStateAsync: function(callback) {
    request.get('http://localhost:8000/json/products.json').end(function(response) {
      return callback(null, {
        products: response.body.products
      });
    });
  },
  render: function() {
    var productNodes;
    productNodes = this.state.products.map(function(product) {
      return (
        <Product key={product._id} product={product}></Product>
      );
    });
    return (
      <div className="ProductList">
        {productNodes}
      </div>
    );
  }
});

module.exports = ProductList;
