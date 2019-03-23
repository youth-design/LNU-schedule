import {
  SET_GROUP,
  GET_GROUP_SUCCESS,
  GET_GROUP,
  GET_GROUP_ERROR
} from "./constants";

const initialState = {
  group: "",
  isFetching: true
};

function groupReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUP:
      window.localStorage.setItem("group", action.group);
      return {
        ...state,
        group: action.group
      };
    case GET_GROUP:
      return {
        ...state,
        isFetching: true
      };
    case GET_GROUP_SUCCESS:
      return {
        ...state,
        group: action.group,
        isFetching: false
      };
    case GET_GROUP_ERROR:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default groupReducer;
