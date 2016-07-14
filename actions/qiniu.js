export const REQUEST_UPLOAD_FILE = 'REQUEST_UPLOAD_FILE';
export const RECEIVE_UPLOAD_FILE = 'RECEIVE_UPLOAD_FILE';

import fetch from 'isomorphic-fetch';
import getQiniuToken from '../libs/qiniu'
import {QINIU_CONFIG} from '../config'


export function requestUploadFile() {
    return {
        type: REQUEST_UPLOAD_FILE
    }
}

export function receiveUploadFile(uniqueId, sourceUrl) {
    return {
        type: RECEIVE_UPLOAD_FILE,
        uniqueId: uniqueId,
        sourceUrl: sourceUrl
    }
}

export function fetchUploadFile(file, key) {
    return dispatch => {
        dispatch(requestUploadFile());
        var form = new FormData();
        form.append('file', file);
        form.append('token', getQiniuToken(key));
        form.append('key', key);
        return fetch(QINIU_CONFIG.uploadDomain, {
            method: 'POST',
            body: form,
            mode: 'cors'
        })
            .then(response => response.json())
            .then(function (json) {
                dispatch(receiveUploadFile(json.key, QINIU_CONFIG.fileDomain + json.key))
            })
    }
}
