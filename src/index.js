import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appg from './Appg';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Appg />, document.getElementById('root1'));
ReactDOM.render(<App />, document.getElementById('root2'));
registerServiceWorker();
