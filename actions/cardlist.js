import { SET_CARDLIST } from '../types/person'
import { SET_PERMA_CARDLIST } from '../types/person'
import { SET_FILTER_CARDLIST } from '../types/person'
import { SET_COUNTER } from '../types/person'
import { SET_ACTIVITY_LIST } from '../types/person'
import { SET_ADD_LIST } from '../types/person'
import { SET_EDIT_LIST } from '../types/person'
import { SET_DELETE_LIST } from '../types/person'

export const setPermaCardList = (permCardlist) => {
    return dispatch => {
        dispatch({
            type: SET_PERMA_CARDLIST,
            payload: { permCardlist }
        })
    }
}

export const setFilterCardList = (filterCardlist) => {
    return dispatch => {
        dispatch({
            type: SET_FILTER_CARDLIST,
            payload: { filterCardlist }
        })
    }
}

export const setCardlist = (cardlist) => {
    return dispatch => {
        dispatch({
            type: SET_CARDLIST,
            payload: { cardlist }
        })
    }
}

export const setCounter = (counter) => {
    return dispatch => {
        dispatch({
            type: SET_COUNTER,
            payload: { counter }
        })
    }
}

export const setActivitylist = (act_list) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVITY_LIST,
            payload: { act_list }
        })
    }
}

export const setAddlist = (add_list) => {
    return dispatch => {
        dispatch({
            type: SET_ADD_LIST,
            payload: { add_list }
        })
    }
}

export const setEditlist = (edit_list) => {
    return dispatch => {
        dispatch({
            type: SET_EDIT_LIST,
            payload: { edit_list }
        })
    }
}

export const setDeletelist = (delete_list) => {
    return dispatch => {
        dispatch({
            type: SET_DELETE_LIST,
            payload: { delete_list }
        })
    }
}