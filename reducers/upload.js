import * as ActionTypes from '../actions/qiniu'


export default function upload(state = [], action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_UPLOAD_FILE:
            var newState = [];
            newState = newState.concat(state);
            newState.push({uniqueId: action.uniqueId, sourceUrl: action.sourceUrl});
            return newState;
        default:
            return state;
    }
}