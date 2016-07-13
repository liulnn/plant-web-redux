import {base64encode, safe64} from './base64'
import {utf16to8} from './utf'
import CryptoJS from "crypto-js";
import {QINIU_CONFIG} from '../config'


function policy(bucket, key, async, expires) {
    var policy = {};
    policy.scope = bucket;
    if (key) {
        policy.scope += (":" + key);
    }
    if (async) {
        policy.async = async;
    }
    var deadline = Math.round(new Date().getTime() / 1000) + expires * 3600
    policy.deadline = deadline;
    return policy;
}

export default function getQiniuToken(bucket, key, async, expires) {
    console.log(bucket, key, async, expires)
    var putPolicy = policy(bucket, key, async, expires);
    var put_policy = JSON.stringify(putPolicy);
    var encoded = base64encode(utf16to8(put_policy));
    var hash = CryptoJS.HmacSHA1(encoded, QINIU_CONFIG.secretKey);
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
    var upload_token = QINIU_CONFIG.accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
    return upload_token;
}

