import React from 'react';

export default function CounterTime({ timeInSeconds }) {
  return (
    <strong>{timeInSeconds}</strong>
  );
}

CounterTime.propTypes = {
  timeInSeconds: React.PropTypes.number.isRequired,
};
