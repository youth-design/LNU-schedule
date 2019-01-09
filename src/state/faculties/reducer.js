import {
  FETCH_FACULTIES,
  FETCH_FACULTIES_SUCCESS,
  FETCH_FACULTIES_ERROR
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  faculties: []
};

function facultiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FACULTIES:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case FETCH_FACULTIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        faculties: action.faculties
      };
    case FETCH_FACULTIES_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
}

export default facultiesReducer;
