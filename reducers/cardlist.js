import { SET_CARDLIST, SET_FILTER_CARDLIST } from '../types/person';
import { SET_PERMA_CARDLIST } from '../types/person';
import { SET_COUNTER } from '../types/person'
import { SET_ACTIVITY_LIST } from '../types/person'
import { SET_ADD_LIST } from '../types/person'
import { SET_EDIT_LIST } from '../types/person'
import { SET_DELETE_LIST } from '../types/person'
 
const initState = {
    cardlist: [],
    permCardlist: [],
    filterCardlist: [],
    act_list: [],
    add_list: [],
    edit_list: [],
    delete_list: [],
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
    case SET_ACTIVITY_LIST :
        return {...state, act_list: action.payload.act_list}
    case SET_ADD_LIST :
        return {...state, add_list: action.payload.add_list}
    case SET_EDIT_LIST :
        return {...state, edit_list: action.payload.edit_list}
    case SET_DELETE_LIST :
        return {...state, delete_list: action.payload.delete_list}
    default :
        return state
    }
}
