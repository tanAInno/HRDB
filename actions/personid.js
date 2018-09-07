import { SET_PERSON_ID } from '../types/person';
export const setPersonId = (personid) => {
  return dispatch => {
    dispatch({
        type: SET_PERSON_ID,
        payload: {
        personid
       }
    })
  }
}