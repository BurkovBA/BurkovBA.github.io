import * as ActionTypes from 'actions'
import { combineReducers } from 'redux'

const language = (previousState, action) => {
  switch(action.type) {
    case ActionTypes.LANGAUGE_SET:
      return Object.assign({}, state, {
        language: action.language
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  language,
});

export default rootReducer