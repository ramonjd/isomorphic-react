# ProductList.coffee
`/** @jsx React.DOM */`
React = require 'react'
request = require 'superagent'
ReactAsync = require 'react-async'
Link = require 'react-router-component'
  .Link;
  
Product = React.createClass
  render: ()->
    product = @props.product
    url = '/product/' + product._id
    `(
      <div className="Product">
          <span><Link href={url}>{product.name}</Link></span>
      </div>
    )`

ProductList = React.createClass
  mixins: [ReactAsync.Mixin]
  getInitialStateAsync: (callback)->
    request.get 'http://localhost:8000/json/products.json'
      .end (response) ->
        callback null, products: response.body.products
    return
  render: ()->
    productNodes = this.state.products.map (product)->
      `(
        <Product key={product._id} product={product}></Product>
      )`
    `(
      <div className="ProductList">
        {productNodes}
      </div>
    )`
  
module.exports=ProductList