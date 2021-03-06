import {createStore, applyMiddleware} from 'redux'
// import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk),
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
