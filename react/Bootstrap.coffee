# Bootstrap.coffee
`/** @jsx React.DOM */`
React = require('react')
App = require('./App.jsx')
if typeof window isnt 'undefined'
  window.onload = ->
    React.renderComponent App(), document
    return