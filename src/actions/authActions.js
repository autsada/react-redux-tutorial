import { startFetch, endFetch, errorFetch } from '../actions/statusActions'

import { signin } from '../data/users'

export const SET_AUTH = 'SET_AUTH'

export function setAuth(user) {
  return {
    type: SET_AUTH,
    payload: user,
  }
}

export function fetchAuthAsync(email, password) {
  return async function (dispatch) {
    try {
      dispatch(startFetch())

      const user = await signin(email, password)

      if (user) {
        dispatch(setAuth(user))
        dispatch(errorFetch(''))
        dispatch(endFetch())
      }
    } catch (error) {
      dispatch(setAuth(null))
      dispatch(errorFetch(error))
      dispatch(endFetch())
    }
  }
}
