import { FETCH_START, FETCH_END, FETCH_ERROR } from '../actions/statusActions'

const initialState = {
  loading: false,
  error: '',
}

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      }

    case FETCH_END:
      return {
        ...state,
        loading: false,
      }

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
