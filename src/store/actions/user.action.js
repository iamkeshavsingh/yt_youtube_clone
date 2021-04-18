import { signInWithGoogle, auth } from '../../config/firebase.config';



export const signInAsync = function () {

    return function (dispatch) {

        signInWithGoogle().then(data => {
            const { email, name } = data.additionalUserInfo.profile;
            const { idToken } = data.credential;
            dispatch(signIn({
                user: {
                    email,
                    name,
                    idToken
                }
            }));
        });
    }
}

export const logoutAsync = function () {

    return function (dispatch) {

        auth.signOut().then(() => {
            dispatch(logout());
        });
    }
}



export const signIn = function (user) {

    return {
        type: 'SIGNIN',
        payload: user
    };
}


const logout = function () {

    return {
        type: 'LOGOUT'
    };
}