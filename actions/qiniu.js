export const GET_TOKEN = 'GET_TOKEN';
import getQiniuToken from '../libs/qiniu'


export function getToken(bucket, key, async, expires) {
    var token = getQiniuToken(bucket, key, async, expires);
    return {
        type: GET_TOKEN,
        token: token
    }
}
