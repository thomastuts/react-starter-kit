import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World! This is <span className="name">{this.props.name}</span> speaking!</h1>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string,
};
