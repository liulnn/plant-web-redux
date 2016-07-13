import * as ActionTypes from '../actions/moments'


export default function moments(state = [], action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_GET_MOMENTS:
            return action.moments;
        default:
            return state;
    }
}