import * as ActionTypes from '../actions/moments'


export default function share(state = {}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_ADD_MOMENT:
            return {mid: action.mid};
        default:
            return state;
    }
}