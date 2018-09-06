import { SET_PERSON } from '../types/person';
const initState = {
    person: {}
}
export default (state = initState, action) => {
switch(action.type) {
    case SET_PERSON :
        return {...state, person: action.payload.person}
    default :
        return state
    }
}