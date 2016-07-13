import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import moments from './moments';
import plants from './plants';
import user from './user';
import isLogin from './isLogin';
import token from './token';


const rootReducer = combineReducers({
    moments,
    plants,
    user,
    isLogin,
    token,
    routing
});

export default rootReducer
