import { SET_PERSON, SET_USER, SET_MAG } from '../types/person';
const initState = {
    person: {},
    user: "",
    mag: {}
}
export default (state = initState, action) => {
switch(action.type) {
    case SET_PERSON :
        return {...state, person: action.payload.person}
    case SET_USER :
        return {...state, user: action.payload.user}
    case SET_MAG :
        return {...state, mag: action.payload.mag}
    default :
        return state
    }
}