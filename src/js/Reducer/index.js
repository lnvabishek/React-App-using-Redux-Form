const initialState = {};
  
function createReducer(state = initialState, action) {
  if (action.type === "createUser") {
    return (action.payload)
  }
  return state;
}
  
export default createReducer;