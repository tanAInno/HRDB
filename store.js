import { createStore, combineReducers, applyMiddleware } from 'redux'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    personReducer
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;