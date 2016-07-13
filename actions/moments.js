import fetch from 'isomorphic-fetch';
import {WILDDOG_CONFIG} from '../config';


export const ADD_MOMENTS = 'ADD_MOMENTS';
export const REQUEST_GET_MOMENTS = 'REQUEST_GET_MOMENTS';
export const RECEIVE_GET_MOMENTS = 'RECEIVE_GET_MOMENTS';

const MOMENT_PATH = WILDDOG_CONFIG.databaseURL + '/server/plant/moments.json' + '?auth=' + WILDDOG_CONFIG.secretKey;

function requestGetMoments() {
    return {
        type: REQUEST_GET_MOMENTS
    }
}

function receiveGetMoments(json) {
    return {
        type: RECEIVE_GET_MOMENTS,
        moments: json
    }
}

export function fetchGetMoments() {
    return dispatch => {
        dispatch(requestGetMoments());
        return fetch(MOMENT_PATH + '&a=' + new Date().getTime(), {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(function (json) {

                dispatch(receiveGetMoments(json))

            })
    }
}

export function addMoment(moment) {
    return {
        type: ADD_MOMENTS,
        moment: moment
    }
}
