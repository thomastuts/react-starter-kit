import React from 'react';

import CounterTime from './CounterTime';
import Icon from './Icon';

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      secondsSinceMount: 0,
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({secondsSinceMount: this.state.secondsSinceMount + 1}),
      1000
    );
  }

  render() {
    return (
      <div>
        <p className="counter">
          I have been mounted for <CounterTime timeInSeconds={this.state.secondsSinceMount} /> seconds. Go ahead and
          change my code, the counter will keep going!
        </p>
        <Icon name="aperture" />
      </div>
    );
  }
}