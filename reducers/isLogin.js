import * as ActionTypes from '../actions/account'


export default function isLOgin(state = false, action) {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return action.success;
        default:
            return state;
    }
}