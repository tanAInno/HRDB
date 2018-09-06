import { SET_PERSON } from '../types/person';
export const setPerson = (person) => {
  return dispatch => {
    dispatch({
        type: SET_PERSON,
        payload: {
        person
       }
    })
  }
}