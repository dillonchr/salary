import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Store />, document.getElementById('root'));
registerServiceWorker();
