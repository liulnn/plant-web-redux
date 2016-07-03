import * as ActionTypes from '../actions/plants'


export default function plants(state = [], action) {
    switch (action.type) {
        case ActionTypes.GET_PLANTS:
            return action.plants;
        default:
            return state;
    }
}