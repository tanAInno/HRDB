import { SET_TAB } from '../types/tab'
const initState = {
    tab: ''
}
export default (state = initState, action) => {
    switch(action.type) {
        case SET_TAB :
            return {...state, tab: action.payload.tab}
        default :
            return state
        }
    }