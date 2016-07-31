import fetch from 'isomorphic-fetch';
import {WILDDOG_CONFIG} from '../config';
import {dict2array} from '../utils/helper';


export const REQUEST_GET_MOMENTS = 'REQUEST_GET_MOMENTS';
export const RECEIVE_GET_MOMENTS = 'RECEIVE_GET_MOMENTS';
export const REQUEST_ADD_MOMENT = 'REQUEST_ADD_MOMENT';
export const RECEIVE_ADD_MOMENT = 'RECEIVE_ADD_MOMENT'
export const CLOSE_TOAST = 'CLOSE_TOAST';


const MOMENT_PATH = WILDDOG_CONFIG.databaseURL + '/server/plant/moments.json?';

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
        var u = new URLSearchParams();
        u.append('auth', WILDDOG_CONFIG.secretKey);
        u.append('orderBy', '"$key"');
        u.append('limitToLast', 10);
        return fetch(MOMENT_PATH + u, {
            mode: 'cors'
            
        })
            .then(response => response.json())
            .then(function (json) {
                var moments = dict2array(json, 'mid');
                moments.map(function (moment) {
                    moment.images = dict2array(moment.images)
                });
                dispatch(receiveGetMoments(moments))
            })
    }
}

export function requestAddMoment() {
    return {
        type: REQUEST_ADD_MOMENT
    }
}

export function receiveAddMoment(response) {
    return {
        type: RECEIVE_ADD_MOMENT,
        response: response
    }
}

export function closeToast() {
    return {
        type: CLOSE_TOAST
    }
}

export function fetchAddMoment(uid, content, place, images) {
    return dispatch => {
        dispatch(requestAddMoment());
        var u = new URLSearchParams();
        u.append('auth', WILDDOG_CONFIG.secretKey);
        return fetch(MOMENT_PATH + u, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                author: uid,
                avatar: 'http://lorempixel.com/600/339/nature/',
                content: content,
                address: place,
                images: images
            }),
            mode: 'cors'
        })
            .then(response => dispatch(receiveAddMoment(response)));
    }
}
