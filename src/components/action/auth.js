import {USER_LOGGED_IN} from "./types"

import api from '../api/api'

export const userLoggedIn = (user) => ( {
types:USER_LOGGED_IN,
user
})


export const login =(Credentials) => (dispatch) =>api.user.login(Credentials).then(user =>dispatch(userLoggedIn(user)));