var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
  <ListManager title='This title is being passed in from main.jsx'/>,
  document.getElementById('react_presentation')
);
