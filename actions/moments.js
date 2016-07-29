import fetch from 'isomorphic-fetch';
import {WILDDOG_CONFIG} from '../config';
import {dict2array} from '../utils/helper';


export const REQUEST_GET_MOMENTS = 'REQUEST_GET_MOMENTS';
export const RECEIVE_GET_MOMENTS = 'RECEIVE_GET_MOMENTS';
export const REQUEST_ADD_MOMENT = 'REQUEST_ADD_MOMENT';
export const RECEIVE_ADD_MOMENT = 'RECEIVE_ADD_MOMENT';

const MOMENT_PATH = WILDDOG_CONFIG.databaseURL + '/server/plant/moments.json' + '?auth=' + WILDDOG_CONFIG.secretKey;

function requestGetMoments() {
    return {
        type: REQUEST_GET_MOMENTS
    }
}

function receiveGetMoments(moments) {
    return {
        type: RECEIVE_GET_MOMENTS,
        moments: moments
    }
}

export function fetchGetMoments() {
    return dispatch => {
        dispatch(requestGetMoments());
        return fetch(MOMENT_PATH, {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(function (json) {
                json.map(function (moment) {
                    moment.images = dict2array(moment.images)
                });
                dispatch(receiveGetMoments(json))
            })
    }
}

export function requestAddMoment() {
    return {
        type: REQUEST_ADD_MOMENT
    }
}

export function receiveAddMoment(mid) {
    return {
        type: RECEIVE_ADD_MOMENT,
        mid: mid
    }
}

export function fetchAddMoment(uid, content, place, images) {
    return dispatch => {
        dispatch(requestAddMoment());
        var form = new FormData();
        form.append('uid', uid);
        form.append('content', content);
        form.append('place', place);
        form.append('images', images);
        return fetch(MOMENT_PATH, {
            method: 'POST',
            body: form,
            mode: 'cors'
        })
            .then(response => response.json())
            .then(function (json) {
                dispatch(receiveAddMoment(json))
            })
    }
}
