import {
  SET_FACULTY,
  GET_FACULTY_SUCCESS,
  GET_FACULTY,
  GET_FACULTY_ERROR
} from "./constants";

const initialState = {
  faculty: "",
  isFetching: true
};

function facultyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FACULTY:
      window.localStorage.setItem("faculty", action.faculty);
      return {
        ...state,
        faculty: action.faculty
      };
    case GET_FACULTY:
      return {
        ...state,
        isFetching: true
      };
    case GET_FACULTY_SUCCESS:
      return {
        ...state,
        faculty: action.faculty,
        isFetching: false
      };
    case GET_FACULTY_ERROR:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default facultyReducer;
