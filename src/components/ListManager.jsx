var React = require('react');
var List = require('./List.jsx');


var ListManager = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      newItemText:''
    };
  },
  onChange: function(e) {
    // open up the Chrome Console and check it out
    // every key press results in a re-render of the DOM.
    // this.setState forces a rerender everytime its called.
    console.log(e.target.value);
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({ items: currentItems, newItemText: '' });
  },
  render: function() {
    return (
      <div>
        <h5>{ this.state.newItemText }</h5>
        {/* The props for this title is being passed in from main.jsx */}
        <h3>{ this.props.title }</h3>
        <form onSubmit={ this.handleSubmit } className="form-inline">
          <input onChange={ this.onChange } value={ this.state.newItemText } className="form-control"/>
          <button className="btn btn-success">Add</button>
        </form>
        <List items={ this.state.items } />
      </div>
    )
  }
});

module.exports = ListManager;
