import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(rootReducer, compose(applyMiddleware(thunk)
    // , window.devToolsExtension ? window.devToolsExtension() : f => f
));