import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import moments from './moments';
import plants from './plants';
import user from './user';
import isLogin from './isLogin';
import upload from './upload';


const rootReducer = combineReducers({
    moments,
    plants,
    user,
    isLogin,
    upload,
    routing
});

export default rootReducer
