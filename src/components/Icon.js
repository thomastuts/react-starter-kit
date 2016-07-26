import React from 'react';

export default function Icon({name}) {
  const icon = require(`../../assets/icons/${name}.svg`);

  return (
    <div className="svg-icon" dangerouslySetInnerHTML={{__html: icon}}></div>
  );
}