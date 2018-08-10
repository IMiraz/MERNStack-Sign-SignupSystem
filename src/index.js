import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ BrowserRouter } from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './components/Reducer/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
