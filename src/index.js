if (module.hot) {
  module.hot.accept();
}

import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
