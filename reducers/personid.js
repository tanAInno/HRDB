import { SET_PERSON_ID } from '../types/person';
const initState = {
    personid: ''
}
export default (state = initState, action) => {
switch(action.type) {
    case SET_PERSON_ID :
        return {...state, personid: action.payload.personid}
    default :
        return state
    }
}