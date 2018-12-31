import {
  GET_FACULTIES,
  GET_FACULTIES_SUCCESS,
  GET_FACULTIES_ERROR
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  faculties: []
};

function facultiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FACULTIES:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case GET_FACULTIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        faculties: action.faculties
      };
    case GET_FACULTIES_ERROR:
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
