import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import moments from './moments';
import plants from './plants';
import user from './user';
import isLogin from './isLogin';
import upload from './upload';
import share from './share';


const rootReducer = combineReducers({
    moments,
    plants,
    user,
    isLogin,
    upload,
    share,
    routing
});

export default rootReducer
