import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import moments from './moments';
import plants from './plants';
import user from './user';
import isLogin from './isLogin';


const rootReducer = combineReducers({
    moments,
    plants,
    user,
    isLogin,
    routing
});

export default rootReducer
