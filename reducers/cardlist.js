import { SET_CARDLIST } from '../types/person';
import { SET_PERMA_CARDLIST } from '../types/person';
 
const initState = {
    cardlist: [],
    permCardlist: []
}
export default (state = initState, action) => {
switch(action.type) {
    case SET_CARDLIST :
        return {...state, cardlist: action.payload.cardlist}
    case SET_PERMA_CARDLIST :
        return {...state, permCardlist: action.payload.permCardlist}
    default :
        return state
    }
}
