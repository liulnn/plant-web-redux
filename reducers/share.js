import * as ActionTypes from '../actions/moments'


export default function share(state = {}, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_ADD_MOMENT:
            return {
                isLoading: true,
                isClosing: true
            };
        case ActionTypes.RECEIVE_ADD_MOMENT:
            return {
                isLoading: false,
                loadSuccess: true,
                isClosing: false,
                response: action.response
            };
        case ActionTypes.CLOSE_TOAST:
            return {
                isClosing: true
            };
        default:
            return state;
    }
}