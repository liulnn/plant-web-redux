import * as ActionTypes from '../actions/moments'


export default function moments(state = [], action) {
    switch (action.type) {
        case ActionTypes.GET_MOMENTS:
            return action.moments;
        default:
            return state;
    }
}