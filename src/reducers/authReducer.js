import { SET_AUTH } from '../actions/authActions'

const initialState = {
  user: null,
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        user: action.payload,
      }

    default:
      return state
  }
}
