import React from 'react';

export default function Icon({ name }) {
  const icon = require(`../../assets/icons/${name}.svg`); // eslint-disable-line global-require
  const html = { __html: icon };

  return (
    <div className="svg-icon" dangerouslySetInnerHTML={html}></div>
  );
}

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
};
