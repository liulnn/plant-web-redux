import * as ActionTypes from '../actions/account'


export default function user(state = {}, action) {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return action.user;
        default:
            return state;
    }
}