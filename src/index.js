import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observe } from './Game';
import registerServiceWorker from './registerServiceWorker';

observe(knightPosition =>
ReactDOM.render(<App knightPosition={knightPosition}/>, document.getElementById('root'))
);
registerServiceWorker();