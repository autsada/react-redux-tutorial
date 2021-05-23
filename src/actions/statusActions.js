export const FETCH_START = 'FETCH_START'
export const FETCH_END = 'FETCH_END'
export const FETCH_ERROR = 'FETCH_ERROR'

export function startFetch() {
  return {
    type: FETCH_START,
  }
}

export function endFetch() {
  return {
    type: FETCH_END,
  }
}

export function errorFetch(error) {
  return {
    type: FETCH_ERROR,
    payload: error,
  }
}
