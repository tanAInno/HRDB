import { SET_PERSON, SET_USER, SET_MAG } from '../types/person';
export const setPerson = (person) => {
  return dispatch => {
    dispatch({
        type: SET_PERSON,
        payload: { person }
    })
  }
}

export const setUser = (user) => {
  return dispatch => {
    dispatch({
        type: SET_USER,
        payload: { user }
    })
  }
}

export const setMag = (mag) => {
  return dispatch => {
    dispatch({
        type: SET_MAG,
        payload: { mag }
    })
  }
}