/*
替换为：
  var React = require('React');

  var Counter = createReactClass({
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  });
*/ 

var React = require('React');

var Counter = React.createClass({
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
