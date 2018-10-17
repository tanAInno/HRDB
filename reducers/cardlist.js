import { SET_CARDLIST, SET_FILTER_CARDLIST } from '../types/person';
import { SET_PERMA_CARDLIST } from '../types/person';
import { SET_COUNTER } from '../types/person'
 
const initState = {
    cardlist: [],
    permCardlist: [],
    filterCardlist: [],
    counter: 20
}
export default (state = initState, action) => {
switch(action.type) {
    case SET_CARDLIST :
        return {...state, cardlist: action.payload.cardlist}
    case SET_PERMA_CARDLIST :
        return {...state, permCardlist: action.payload.permCardlist}
    case SET_FILTER_CARDLIST :
        return {...state, filterCardlist: action.payload.filterCardlist}
    case SET_COUNTER :
        return {...state, counter: action.payload.counter}
    default :
        return state
    }
}
