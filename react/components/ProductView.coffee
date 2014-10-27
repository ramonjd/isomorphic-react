# ProductView.coffee
`/** @jsx React.DOM */`
React = require 'react'
request = require 'superagent'
ReactAsync = require 'react-async'

  

ProductView = React.createClass
  mixins: [ReactAsync.Mixin]
  getInitialStateAsync: (callback)->
    id = @props.id
    request.get 'http://localhost:8000/json/products.json'
      .end (response) ->
        callback null, products: response.body
    return
  render: ()->
    id = @props.id
    `(
      <div className="singleProduct">
        <p>{this.state.products.products[id].desc}</p>
        <p>
          <a href="/">Back</a>
        </p> 
      </div>
    )`
  
module.exports=ProductView