

const INITIAL_STATE = {user : '',
                        is_logged : false};

function rootReducer(state = INITIAL_STATE, action) {
   console.log('hmmmmm',{...state, ...action.user})
  switch (action.type) {
    case "USER":
      return (state = action.user)
      case "LOGGED":
      return {...state,...action.user}
      

    default:
      return state;
  }
}

export default rootReducer;