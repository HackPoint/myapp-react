import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux';
import App from './components/App';
import Store from './store';
import Routes from './routes';

import './index.css';



const StoreInstance = Store();


ReactDOM.render(

    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);