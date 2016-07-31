export const LOGIN = 'LOGIN';
export const GET_USER = 'GET_USER';


export function login(username, password) {
    return {
        type: LOGIN,
        success: true
    }
}

export function getUser(user) {
    return {
        type: GET_USER,
        user: user
    }
}
