import { SET_TAB } from '../types/tab'
export const setTab = (tab) => {
    return dispatch => {
        dispatch({
            type: SET_TAB,
            payload: { tab }
        })
    }
}