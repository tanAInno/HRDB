import { createStore, combineReducers, applyMiddleware } from 'redux'
import personReducer from './reducers/person'
import personIDReducer from './reducers/personid'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    personReducer,
    personIDReducer
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;