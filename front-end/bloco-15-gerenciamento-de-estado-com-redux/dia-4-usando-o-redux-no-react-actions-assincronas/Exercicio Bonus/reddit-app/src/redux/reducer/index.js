import { combineReducers } from "redux";
import { RESPOSTA, REQUEST, ERROR } from "../action";

const INITIAL_STATE = {
  loading: false,
  error: '',
  data: [],
  isError: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case RESPOSTA:
      return {...state, data: action.payload.data, loading: false,  isError: false}
    case ERROR:
      return {...state, error: action.e, loading: false, isError: true}
    case REQUEST:
      return {...state, loading: true}
    default:  return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer