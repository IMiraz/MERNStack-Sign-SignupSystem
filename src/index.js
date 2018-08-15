import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ BrowserRouter } from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './components/Reducer/rootReducer'
import { userLoggedIn } from './components/action/auth';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)
));

if(localStorage.loginJWT) {
    const user ={token: localStorage.loginJWT};
    store.dispatch(userLoggedIn(user));

}

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
