import {combineReducers} from 'redux'
import addingData from './Reducer'
import auth_reducer from './AuthReducer'

const allReducers = combineReducers({
    alldata:addingData,
    auth:auth_reducer
})


export default allReducers