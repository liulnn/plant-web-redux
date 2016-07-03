import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        // compose(
        //   applyMiddleware(thunk, api, createLogger()),
        // )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
