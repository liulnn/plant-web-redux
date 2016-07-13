import * as ActionTypes from '../actions/qiniu'


export default function token(state = '', action) {
    switch (action.type) {
        case ActionTypes.GET_TOKEN:
            return action.token;
        default:
            return state;
    }
}