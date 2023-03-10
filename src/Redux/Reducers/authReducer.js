import { ADD_IMAGE, GET_ALL_DATA } from "../actionType";
const initialState = {
  data: [],
};
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_IMAGE:
      return{
        ...state,
        addImage:action.payload
      }
    default:
      return state;
  }
};
export default authReducer;
