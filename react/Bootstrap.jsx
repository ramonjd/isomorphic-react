/** @jsx React.DOM */;
var App, React;

React = require('react');

App = require('./App.jsx');

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  };
}
