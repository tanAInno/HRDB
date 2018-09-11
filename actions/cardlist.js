import { SET_CARDLIST } from '../types/person'
import { SET_PERMA_CARDLIST } from '../types/person'

export const setPermaCardList = (permCardlist) => {
    return dispatch => {
        dispatch({
            type: SET_PERMA_CARDLIST,
            payload: { permCardlist }
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