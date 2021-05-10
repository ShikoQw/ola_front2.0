export function getSession(request) {
    return request.headers.cookie.includes('access_token') ? {session_token: true} : {session_token: false}
};