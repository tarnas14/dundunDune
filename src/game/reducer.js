import {actionConstants as actions} from './actions'

export default (state = {}, action) => {
  switch (action.type) {
  case actions.INIT: 
    return {
      map: {
        ...action.options
      }
    }
  default:
    return state
  }
}
