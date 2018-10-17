import { SET_CARDLIST } from '../types/person'
import { SET_PERMA_CARDLIST } from '../types/person'
import { SET_FILTER_CARDLIST } from '../types/person'
import { SET_COUNTER } from '../types/person'

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