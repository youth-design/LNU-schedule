import {
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_ERROR
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  groups: []
};

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GROUPS:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        groups: action.groups
      };
    case FETCH_GROUPS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
}

export default groupsReducer;
