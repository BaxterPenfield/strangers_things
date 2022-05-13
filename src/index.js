import React from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components';
const App = () => {
  return <div>
    <Posts />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);