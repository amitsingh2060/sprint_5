import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './Redux/AllReducers'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

const store= createStore(allReducers,applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

