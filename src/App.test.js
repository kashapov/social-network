import React from 'react';
import ReactDOM from 'react-dom';

import AppSN from './App';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppSN />, div);
  ReactDOM.unmountComponentAtNode(div);
});
