var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4 className="animated bounceInRight">{ this.props.text }</h4>
      </li>
    );
  }
});

module.exports = ListItem;
